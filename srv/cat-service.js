const cds = require('@sap/cds');
const { INSERT, SELECT } = require('@sap/cds/lib/ql/cds-ql');

module.exports = (srv) => {
  const { feedback } = srv.entities;
  srv.on('submitFeedback', async (req) => {

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

  srv.on('getAnalytics', async (req) => {

    const data = await SELECT.from(feedback);

    const total = data.length;

    const avg = total
      ? data.reduce((sum, item) => sum + item.rating, 0) / total
      : 0;

    req.info(`Total Feedback: ${total}, Avg Rating: ${avg.toFixed(2)}`);

    return {
      totalfeedback: total,
      avgRating: avg.toFixed(2)
    };
  })

}