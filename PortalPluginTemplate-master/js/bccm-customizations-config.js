export default {
    ruleButtonPlugin: {
        userGroups: [
            {
                name: `Admin`,
                buttons: [
                    {
                        label: `Send to BMM`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColour: `button-green`
                    },
                    {
                        label: `test1`,
                        processId: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`,
                        buttonColour: `button-yellow`
                    }
                ]
            },
            {
                name: `other-group`,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`
                    }
                ]
            },
            {
                name: `_special_all`,
                buttons: [
                    {
                        label: `Send to BrunstadTV`,
                        process_id: `process_f50625b5-0c30-4364-b26e-4ec0f01db436`
                    }
                ]
            }
        ]
    }
}