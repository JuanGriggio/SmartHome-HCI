VUE.component (
    'quick-action',
    {
        props: {
            name: {
                type: String,
                required: true
            },
            iconn: {
                type: String,
                required: true
            }
        },
        template: {
            <div>
                <p>{{iconn}}</p>
                <p id="npnm">{{name}}</p>
            </div>  
        },
        data () {
            return {}
        }
    }
);