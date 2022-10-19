type OptionPros = {
    ImageList: string[];
};

const ResultImage = ({ ImageList }: OptionPros) => {
    return (
        <div className="list-rank">
            {ImageList.map((image, index) => (
                <a href={image} target="_blank">
                    <img src={image} alt={image} />
                </a>
            ))}
        </div>
    )
}
export default ResultImage;

// const ResultImages = ["images/top1.png", "images/top2.png", "images/top3.png", "images/top4.png", "images/top5.png"]
// const ResultImagesAlt = ["エミシアクリニック", "ジュノビューティークリニック", "レジーナクリニック", "リゼクリニック", "フレイアクリニック"]
// const ResultLinks = ["https://emishia-clinic.jp/epilation01/", "https://lp.shinjukubc.com/lp401-cam-1/", "https://t.afi-b.com/visit.php?guid=ON&a=B8551a-Z288140v&p=I863707s", "https://www.rizeclinic.com/lp/op2209/05g/", "https://t.afi-b.com/visit.php?guid=ON&a=G10718g-c361908M&p=I863707s"]
// const Filter1 = ["02", "01", "00", "00", "00"]
// const Filter2 = ["11", "11", "11", "11", "10"]
// const Filter3 = ["21", "21", "21", "21", "22"]
// const Filter4 = ["32", "30", "30", "30", "30"]
// const Filter5 = ["41", "40", "42", "42", "40"]
// const Filter6 = ["51", "50", "52", "52", "50"]