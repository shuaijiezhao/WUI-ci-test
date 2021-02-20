import * as React from "react";
import Icon from "../icon/icon";
import Scroll from './scroll';

const ScrollExample: React.FC = () => {
    const refreshIcon = (): React.ReactElement => {
        return <Icon name="cart"/>
    }

    const onPull = () => {
        console.log("通知外界用户释放了下拉更新")
    }

    return (
        <React.Fragment>
            <div className="wui-panel">
                <h3><strong>Scroll 基本用法</strong></h3><br/>
                {/* <p></p><br/> */}
                <Scroll style={{height: 300, border: '1px solid red'}} onPull={onPull} refreshIconRender={refreshIcon}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p>20</p>
                </Scroll>
            </div>
        </React.Fragment>
    )
}

export default ScrollExample;