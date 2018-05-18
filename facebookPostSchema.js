const fbObj = {

    name: {
        type : "String",
        required : true
    },

    date_time : {

        default : Date.now()
    },

    data : {

        type : "String",
        required : "True"
    },

    like_data : {

        like_id : {

            type : "Number"
        },

        like_user : {

            type : "String"
        }
    },

    comment_data : {

        comment_id : {

            type : "Number"
        },

        comment_user : {

            type : "String"
        },

        comment_text : {

            type : "String"
        }
    }
}