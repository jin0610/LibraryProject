import NoticeForm from "../../components/noticeForm";

const writeNotice = () =>{

    const [hello, setHello] = useState('');

    useEffect(() => {
        console.log("start")
        client.get('/api/main').then((res) => {
        console.log(res.data.msg)
        setHello(res.data.msg)
        }).catch((err) => console.log(err))

    },[])

    return(
        <NoticeForm msg={hello}/>
    )
}

export default writeNotice;