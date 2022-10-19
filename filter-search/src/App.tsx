import React, { useState } from "react"
import './App.css';
import BannerImage from './components/BannerImage';
import ResultImage from './components/ResultImage';
import SelectOption from './components/SelectOption';
import { OptionArr, SelectTitle, simpleData } from "./mock";

function App() {
  const [resultImageList, setResultImageList] = useState([])
  const handleOnChange = (val: string) => {
    console.log(val)
  }
  const handleChoonseClick = (val: string) => {
    console.log(val)
  }
  return (
    <section className="form-filter">
      <div className="container">
        <BannerImage />
        <div className="list-check-box">
          {simpleData.map((item, index) => (
            <div className="form-groups">
              <label>{item.title}</label>
              <div className="check-box list-flex">
                {item.filter.map((i, j) => (
                  <SelectOption value={i.value} onChange={handleOnChange} choonseClick={handleChoonseClick} index={j}>
                    {i.label}
                  </SelectOption>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="btn">すべての選択を解除</a>
        <ResultImage ImageList={resultImageList} />
      </div>
    </section>
  )
}

export default App;


