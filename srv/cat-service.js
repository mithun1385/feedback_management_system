const cds = require('@sap/cds');
const { INSERT, SELECT } = require('@sap/cds/lib/ql/cds-ql');

module.exports = class feedBackService extends cds.ApplicationService {
    init() {
        const { feedback } = this.entities;
        this.on('submitFeedback', async (req) => {

            const { name, message, rating } = req.data

            await INSERT.into(feedback).entries({
                ID: cds.utils.uuid(),
                name,
                message,
                rating,
                createdAt: new Date()

            })

            req.notify('Feedback is submitted successfully')
        });

        this.on('getAnalytics', async (req) => {
          const result = await SELECT.from(feedback);

          const total = result.length

          const avg = total === 0 ? 0:result.reduce((sum ,item)=> sum + item.rating,0) /total;

          return({
            totalfeedback:total,
            avgRating:avg.toFixed(2)
            
          })
        })

        return super.init()
    }
}