import React, {useEffect, useState} from "react"
import './App.css';
import BannerImage from './components/BannerImage';
import ResultImage from './components/ResultImage';
import SelectOption from './components/SelectOption';

function App() {
  const [ResultImageList, setResultImageList] = useState(['images/top1.png'])
  const [checkedState, setCheckedState] = useState([false,false,false]);
  const onChange = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const Val = event.currentTarget.getAttribute('value')
    console.log(Val)
  }
  const choonseClick = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const parentInt = event.currentTarget.parentElement?.getAttribute('data-index')
    const childInt = event.currentTarget.children[0].getAttribute('value')
    //const mergeInt = parentInt + childInt;
    setResultImageList(["images/top1.png","images/top2.png","images/top3.png","images/top4.png","images/top5.png"]);
    // if(parentInt == 0) {
    //   if(mergeInt == '00') setResultImageList(["images/top3.png","images/top4.png","images/top5.png"]);
    //   if(mergeInt == '01') setResultImageList(["images/top2.png"]);
    //   if(mergeInt == '02') setResultImageList(["images/top1.png"]);
    // }
  }
  return (
    <section className="form-filter">
          <div className="container">
              <BannerImage />
              <div className="list-check-box">
                {SelectTitle.map((Title,index) => (
                  <div className="form-groups">
                      <label>{Title}</label>
                      <div className="check-box list-flex" data-index={index}>
                        {OptionArr[index].map((Option,indexChild) => (
                          <SelectOption onChange={onChange} choonseClick={choonseClick} index={indexChild}>
                            {Option}
                          </SelectOption>
                        ))}
                      </div>
                  </div>
                ))}
              </div>
              <a href="#" className="btn">すべての選択を解除</a>
              <ResultImage ImageList={ResultImageList} />
          </div>
      </section>
  )
}

export default App;
const SelectTitle = ["総合評価","導入脱毛機","痛みの少なさ","予約の取りやすさ","月々のお支払額","総額"]
const OptionList1 = ["～★4.0","★4.1～★4.4","★4.5～"]
const OptionList2 = ["蓄熱式","熱破壊式"]
const OptionList3 = ["～★4.0","★4.1～★4.4","★4.5～"]
const OptionList4 = ["～★4.0","★4.1～★4.4","★4.5～"]
const OptionList5 = ["～2,500円～★4.0","2,501～5,000円","5,001円～"]
const OptionList6 = ["～200,000円","200,001円～300,000円","200,001円～300,000円"]
const OptionArr = [OptionList1,OptionList2,OptionList3,OptionList4,OptionList5,OptionList6]

const Filter1 = ["02","01","00","00","00"]
const Filter2 = ["11","11","11","11","10"]
const Filter3 = ["21","21","21","21","22"]
const Filter4 = ["32","30","30","30","30"]
const Filter5 = ["41","40","42","42","40"]
const Filter6 = ["51","50","52","52","50"]


