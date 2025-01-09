import './css/InputBox.css'

const InputBox = () =>{
    return(
        <div class="container searchbox">
            <div class="searchgroup input-group">
                <input placeholder="Search" class="search-input rounded-pill form-control" type="search"/>
                <span class="my-auto">
                    <button type="button" class="searchbtn btn btn-white "><i class="bi bi-search"></i></button>     
                </span>
            </div>
        </div>

    )
}

export default InputBox;