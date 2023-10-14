//var elementH1=document.createElement('h1');  
//elementH1.innerText='this is a heading';
//elementH1.classList.add('heading');
 
//var container=document.getElementById('container');
//container.appendChild(elementH1);

//using React
//var elementH1=React.creatElement('h1',{children:'this is a heading', className:'heading'});
//ReactDOM.createRoot(document.getElementById('container')).render(elementH1);

//using react and babel

var elementH1=(
    <h1 className="heading">this is a heading</h1>
);
ReactDOM.createRoot(document.getElementById('container')).render(elementH1);