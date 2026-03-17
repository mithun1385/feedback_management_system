using {cuid} from '@sap/cds/common';

namespace feedback;

entity feedBack : cuid {
    name      : String(260);
    message   : String(500);
    rating    : Decimal(2, 1);
    createdAt : Timestamp;
}
