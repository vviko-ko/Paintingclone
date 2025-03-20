import Ins from '../Image/ins.png'
import Painter from '../Image/painter.png'
import Flex from '../Image/flex.png'

export default function Insipirator() {
    return (
    <div className='mt-5'>
        <img src={Ins} alt="" />
            <div className='flex'>
                <div>
                    <img src={Painter} alt=""/>
                </div>
                <div>
                    <img src={Flex} alt="" />
                </div>
            </div>
    </div>
    );
  }
  