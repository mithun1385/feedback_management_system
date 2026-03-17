using feedBackService as service from '../../srv/cat-service';
annotate service.feedback with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'message',
                Value : message,
            },
            {
                $Type : 'UI.DataField',
                Label : 'rating',
                Value : rating,
            },
            {
                $Type : 'UI.DataField',
                Label : 'createdAt',
                Value : createdAt,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'message',
            Value : message,
        },
        {
            $Type : 'UI.DataField',
            Label : 'rating',
            Value : rating,
        },
        {
            $Type : 'UI.DataField',
            Label : 'createdAt',
            Value : createdAt,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'feedBackService.EntityContainer/submitFeedback',
            Label : '{i18n>Submitfeedbac}',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'feedBackService.EntityContainer/getAnalytics',
            Label : 'getAnalytics',
        },
    ],
);

