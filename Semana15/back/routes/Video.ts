// VIDEO ROUTER
import {video_controller} from './../controllers/Video';
import {Router} from 'express';
export var video_router = Router();
video_router.post('/video',video_controller.create);
video_router.get('/video',(req,res)=>{
    res.send("ruta de video ok");
});