import PageBlock from "../components/PageBlock";
import Header from "../components/sample/Header";
import Banner from '../components/sample/Banner';
import BookListCard from "../components/sample/BookListCard";
import BookListList from "../components/sample/BookListList";


const SamplePage = () =>{
    

    return(
        <PageBlock>
            <Header/>
            <Banner/>
            <BookListCard/>
            <BookListList/>
        </PageBlock>
    )
}

export default SamplePage;