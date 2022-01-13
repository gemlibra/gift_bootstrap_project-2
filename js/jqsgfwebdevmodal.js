

$(document).ready(() =>{
    $("#gxModal").hide();
});


function showModal() {
   // $("#gxModal").modal('show');   
    $("#gxModal").modal({ backdrop: 'static',keyboard: true});
};


/*  THIS MODULE CAUSES A MODAL TO BE TRIGGERED ON CLICK OF A BUTTON.

<style>
    .bs-example{
        margin: 20px;
    }
</style>
</head>
<body>
<div class="bs-example">
    <!-- Button HTML (to Trigger Modal) -->
    <button type="button" class="btn btn-lg btn-primary">Show Modal</button>
 
    <!-- Modal HTML -->
    <div id="myModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal Title</h5>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>This is a simple Bootstrap modal. Click the "Cancel button", "cross icon" or "dark gray area" to close or hide the modal.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html> */