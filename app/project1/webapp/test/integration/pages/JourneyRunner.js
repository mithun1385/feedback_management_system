sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/feedbackList",
	"project1/test/integration/pages/feedbackObjectPage"
], function (JourneyRunner, feedbackList, feedbackObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flp.html#app-preview',
        pages: {
			onThefeedbackList: feedbackList,
			onThefeedbackObjectPage: feedbackObjectPage
        },
        async: true
    });

    return runner;
});

