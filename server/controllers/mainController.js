// get homepage

exports.homepage=async(req,res)=>{
    const locals={
        title:"NoteEase",
        description:"Free Notes App"
    };
    res.render("index",{
        locals,
        layout:"../views/layouts/front-page"
    })
}


// get about

exports.about=async(req,res)=>{
    const locals={
        title:"NoteEase",
        description:"Free Notes App"
    };
    res.render("about",locals)
}
// get FAQs

exports.faqs=async(req,res)=>{
    const locals={
        title:"NoteEase",
        description:"Free Notes App"
    };
    
    res.render("FAQs",locals)
}
