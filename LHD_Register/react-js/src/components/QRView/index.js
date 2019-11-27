import React from "react"
import {Divider,Button,Icon} from 'antd'
export default({}) =>{



    return(
        <>
      <div className="flex flex-col justify-center h-screen">
          <div className="text-right">
            <Button type="primary" shape="circle">
           X
            </Button>
          </div>
          <div className="h-48 min-w-full border-4 p-64 justify-center">
              <Divider dashed></Divider>
          </div>
</div>
        </>
    )
}