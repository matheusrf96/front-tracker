const TrackerInput = (props) => {
    console.log(props)

    return (
        <>
            <script>{
                (function(c,o,m,r,a,d,e){
                r=o.createElement('script');r.async=1;r.src='http://localhost:8000/cmp'+c.location.search;
                r.id="cmp";a=o.getElementsByTagName('script')[0];a.parentNode.insertBefore(r,a);
                d=o.createElement('input');d.type='hidden';d.id='eh';d.value=m;
                e=o.getElementsByTagName('body')[0];e.appendChild(d);
                })(window,document,props.apiKey)
            }</script>
            <input type="hidden" id="tracker_value" name="tracker_value" value={ props.page } />
        </>
    )
}

export default TrackerInput
