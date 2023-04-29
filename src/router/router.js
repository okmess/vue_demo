import VueRouter from  'vue-router'
import Home from "@/pages/Home";


export default new VueRouter({
    routes:[
        {
          path: '/',
          redirect:'index'
        },
        {
            path:'/',
            component:Home,
            children:[
                {
                    name:'index',
                    path:'index',
                    component:()=>import('@/pages/index'),
                    redirect:'index/RecommendVideo',
                    children:[
                        {
                            name:'RecommendVideo',
                            path:'RecommendVideo',
                            component:()=>import('@/pages/RecommendVideo')
                        }


                    ]

                }
            ]
        }
    ]
})
