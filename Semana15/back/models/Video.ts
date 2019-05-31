var mongoose = require('mongoose');
var Schema = mongoose.Schema;
export var videoSchema = new Schema({
    vid_titu: String,
    vid_desc: String,
    vid_link: String,
    vid_img: String,
    vid_likes: [
        {
            usu_nom:String,
            usu_email:String
        }
    ],
    vid_comments:[
        {
            usu_email:String,
            usu_nom:String,
            comment: String
        }
    ]
});

