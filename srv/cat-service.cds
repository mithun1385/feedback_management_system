using {feedback as db} from '../db/schema';

service feedBackService {
    entity feedback as projection on db.feedBack;

    action submitFeedback(name: String(260),
                          message: String(500),
                          rating: Decimal(2, 1))

    action getAnalytics() returns {
        totalfeedback : Integer;
        avgRating     : Decimal(3, 2)
    }
}
