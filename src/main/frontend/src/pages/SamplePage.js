import PageBlock from "../components/PageBlock";
import Header from "../components/sample/Header";
import Banner from '../components/sample/Banner';
import BookListCard from "../components/sample/BookListCard";
import BookListList from "../components/sample/BookListList";
import NoticeTable from "../components/sample/NoticeTable";
import InputBox from "../components/sample/InputBox";


const SamplePage = () =>{
    

    return(
        <PageBlock>
            <Header/>
            <Banner/>
            <InputBox/>
            <BookListCard/>
            <BookListList/>
            <NoticeTable/>
        </PageBlock>
    )
}

export default SamplePage;