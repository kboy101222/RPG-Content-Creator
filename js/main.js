$(document).ready(function () {
    // Storage variable for Items
    var itemStorage = {};
    // console.log('Initial itemStorage value: ', itemStorage);
    // Get the itemStorage Cookie if it exists
    if (Cookies.enabled) {
        if (Cookies.get('itemStorage')) {
            var tempString = Cookies.get('itemStorage');
            itemStorage = JSON.parse(tempString);
            console.log("itemStorage set by previous cookies!");
            console.log('New itemStorage value: ', itemStorage);
            updateCards();
        } else {
            console.log("Unabled to set itemStorage.\nEither the Cookie doesn't exist or an error has occurred!");
        }
    } else {
        alert("ATTENTION! To save items, you MUST have cookies enabled for this site!");
    }

    // Hiding and disabling everything that doesn't need
    // to be shown / loaded immediately

    // Items don't require attunement by default
    $("#attunementDesc").prop('disabled', true);
    $("#defaultAttunement").prop('disabled', true);

    function setShownFields(itemType){
        if(itemType == "mundane"){
            // Hides and shows default Item Creators
            $('#weaponTypeCreator').hide();
            $('#armorTypeCreator').hide();
            $('#itemTypeCreator').hide();
            $("#mundaneTypeCreator").show();
            // Disables Item Rarity since it's irrelevant to Mundane Items
            $('#itemRarity').prop('disabled', true);
            // Disables form objects for Magic Item Creation
            $('#itemTypeSelect').prop('disabled', true);
            // Disables form objects for Weapon Creation
            $('#weaponAbil').prop('disabled', true);
            $('#numDice').prop('disabled', true);
            $('#weaponDie').prop('disabled', true);
            $('#weaponDmgType').prop('disabled', true);
            //Disables for objects for Armor Creation
            $('#armorType').prop('disabled', true);
            $('#armorClass').prop('disabled', true);
            $('#dexMod').prop('disabled', true);
            $('#strengthReq').prop('disabled', true);
            $('#stealthDAdv').prop('disabled', true);
        } else if (itemType == 'magic') {
            // Hides and shows default Item Creators
            $('#weaponTypeCreator').hide();
            $('#armorTypeCreator').hide();
            $('#itemTypeCreator').show();
            $("#mundaneTypeCreator").hide();
            // Disables Item Rarity since it's irrelevant to Mundane Items
            $('#itemRarity').prop('disabled', false);
            // Disables form objects for Magic Item Creation
            $('#itemTypeSelect').prop('disabled', false);
            // Disables form objects for Weapon Creation
            $('#weaponAbil').prop('disabled', true);
            $('#numDice').prop('disabled', true);
            $('#weaponDie').prop('disabled', true);
            $('#weaponDmgType').prop('disabled', true);
            //Disables for objects for Armor Creation
            $('#armorType').prop('disabled', true);
            $('#armorClass').prop('disabled', true);
            $('#dexMod').prop('disabled', true);
            $('#strengthReq').prop('disabled', true);
            $('#stealthDAdv').prop('disabled', true);
        } else if (itemType == 'weapon'){
            // Hides and shows default Item Creators
            $('#weaponTypeCreator').show();
            $('#armorTypeCreator').hide();
            $('#itemTypeCreator').hide();
            $("#mundaneTypeCreator").hide();
            // Disables Item Rarity since it's irrelevant to Mundane Items
            $('#itemRarity').prop('disabled', false);
            // Disables form objects for Magic Item Creation
            $('#itemTypeSelect').prop('disabled', true);
            // Disables form objects for Weapon Creation
            $('#weaponAbil').prop('disabled', false);
            $('#numDice').prop('disabled', false);
            $('#weaponDie').prop('disabled', false);
            $('#weaponDmgType').prop('disabled', false);
            //Disables for objects for Armor Creation
            $('#armorType').prop('disabled', true);
            $('#armorClass').prop('disabled', true);
            $('#dexMod').prop('disabled', true);
            $('#strengthReq').prop('disabled', true);
            $('#stealthDAdv').prop('disabled', true);
        } else if (itemType == 'armor'){
            // Hides and shows default Item Creators
            $('#weaponTypeCreator').hide();
            $('#armorTypeCreator').show();
            $('#itemTypeCreator').hide();
            $("#mundaneTypeCreator").hide();
            // Disables Item Rarity since it's irrelevant to Mundane Items
            $('#itemRarity').prop('disabled', false);
            // Disables form objects for Magic Item Creation
            $('#itemTypeSelect').prop('disabled', true);
            // Disables form objects for Weapon Creation
            $('#weaponAbil').prop('disabled', true);
            $('#numDice').prop('disabled', true);
            $('#weaponDie').prop('disabled', true);
            $('#weaponDmgType').prop('disabled', true);
            //Disables for objects for Armor Creation
            $('#armorType').prop('disabled', false);
            $('#armorClass').prop('disabled', false);
            $('#dexMod').prop('disabled', false);
            $('#strengthReq').prop('disabled', false);
            $('#stealthDAdv').prop('disabled', false);
        }

        //Disables special armor rules for Class Creation
        $('#armorspecialrules').prop('disabled', true);
    }
    setShownFields("mundane");
    console.log("Document Loaded!");

    $('select[name="itemType"]').change(function () {
        console.log("Item Type changed to " + this.value);
        setShownFields(this.value);
    });

    $('input[type=checkbox][name=attunement]').change(function () {
        if ($(this).prop('checked')) {
            $('#attunementDesc').prop("disabled", false);
            $("#defaultAttunement").prop('disabled', false);
        } else {
            $('#attunementDesc').prop("disabled", true);
            $('#defaultAttunement').prop("disabled", true);
        }
    });

    $('#armorspecial').change(function () {
        if ($(this).prop('checked')) {
            $('#armorspecialrules').prop('disabled', false);
        } else {
            $('#armorspecialrules').prop('disabled', true);
        }
    })

    $('#defaultAttunement').change(function () {
        if ($(this).prop('checked')) {
            $('#attunementDesc').val("You must spend a long rest meditating over this item");
        } else {
            $('#attunementDesc').val('');
        }
    });

    function updateCards() {
        var cardHTML = "";
        $('#itemCards').empty();

        jQuery.each(itemStorage, function (item, value) {
            console.log('Item: ', item);
            var weightSuufix = 'lbs';
            if (value.itemWeight == "0" || value.itemWeight == '') {
                value.itemWeight = '-';
                weightSuufix = '';
            }
            if (value.itemWeight == "1") {
                weightSuufix = 'lb';
            }
            if (value.itemCost == "0" || value.itemCost == '') {
                value.itemCost = '-';
                value.coinType = '';
            }
            cardHTML = '<div class="card" style="width:350px; margin: 15px;">';

            if (value.itemImage) {
                cardHTML += '<img class="card-image-top" src="' + value.itemImage + '" alt="Item Image">'
            }

            cardHTML += '<div class="card-body"><h5 class="card-title">';
            cardHTML += value.itemName + '</h5>';

            switch (value.itemType) {
                // TODO: Implement previews for all item types
                case "mundane":
                    cardHTML += '<div class="row"><div class="col-6">Cost: ' + value.itemCost + value.coinType + '</div><div class="col-6"> Weight: ' + value.itemWeight + weightSuufix + '</div></div>';
                    cardHTML += '<p class="card-text">' + value.description + '</p>';
                    break;
            }

            cardHTML += '<div class="btn-group" role="group"><button class="btn text-dark btn-info font-weight-bold" action="get-item-image" itemID="' + item + '">Get Image</button><button class="btn text-dark btn-info font-weight-bold" action="edit-item" itemID="' + item + '">Edit</button><button class="btn text-dark btn-info font-weight-bold" action="export-item" itemid="' + item + '">Export</button></div>';
            cardHTML += '</div></div>';

            console.log("ItemID: " + item);

            $('#itemCards').append(cardHTML);
//            $('#newItemCreator').modal("hide");
        });
    }

    $('#createNewItem').on('click', function () {
        var itemCreationForm = $('#itemCreationForm').serializeArray();
        var newItem = {};
        // console.log(itemCreationForm);
        var itemID = "UnnamedItem";
        jQuery.each(itemCreationForm, function (i, field) {
            if (field.name === 'itemName') {
                if (field.value != '') {
                    itemID = field.value.replace(/\s/g, '');
                    console.log('Item Name: ', itemID);
                } else {
                    field.value = "Unnamed Item";
                }
            }
            newItem[field.name] = field.value;
        });

        itemStorage[itemID] = newItem;
        console.log(itemStorage);

        updateCards();

        if (Cookies.enabled) {
            var tempVar = JSON.stringify(itemStorage);
            Cookies.set('itemStorage', tempVar, {
                expires: Infinity
            });
        }
        // var test = Cookies.get('itemStorage');
        // console.log('newItem: ', newItem);
        // console.log('itemStorage: ', itemStorage);
        // console.log('Item: ', itemStorage[itemID]);
        // console.log('itemStorage Cookie Value: ', Cookies.get('itemStorage'));

    });



    $('[action="edit-item"]').on("click", function () {
        var itemID = $(this).attr("itemid");
        var itemData = itemStorage[itemID];
        console.log("Editting", itemID)
        console.log("Data:\n", itemData);
        $('#newItemCreator').modal();
        setShownFields(itemData["itemType"]);

        if(itemData["attument"]){
            $('#attunement').prop("checked", true);
            $('#attunementDesc').prop("disabled", false);
            $("#defaultAttunement").prop('disabled', false);
        } else {
            $('#attunement').prop("checked", false);
            $('#attunementDesc').val('');
            $('#attunementDesc').prop("disabled", true);
            $('#defaultAttunement').prop("disabled", true);
        }

        $.each(itemData, function(key, value){
            if(value){
                console.log("Key:", key);
                console.log("Value:", value);

                $('[name="' + key + '"]').val(value);
            }
        });
    });

    $("#toggle-theme").change(function() {
        if ($('#toggle-theme').prop('checked')) {
            $('head').append('<link rel="stylesheet" href="./css/bootstrap-darkly.css" type="text/css" theme="dark" />');
            $('#theme-toggle-text').html("Toggle Light Theme");
        } else {
            $('[theme="dark"]').remove();
            $('#theme-toggle-text').html("Toggle Dark Theme");
        }
    });
});

$('[action="get-item-image"]').on("click", function () {
        var cardID = $(this).attr("itemid");
        console.log('Get image for', cardID);
        element = document.getElementById("cardID");

        function filter(node) {
            return (node.tagName != "a");
        }

        // html2canvas(element).then(function (canvas) {
        //     canvas2img = canvas.toDataURL('image/png');
        //     $(document).appendChild(canvas2img);
        // })
        domtoimage.toPng(element)
            .then(function (dataUrl) {
                console.log(dataUrl);
                //window.open(dataUrl);
                var img = new Image();
                img.src = dataUrl;
                document.getElementById("itemCards").appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    });

$('#newClassCreator').on('shown.bs.modal', function () {
    $('#className').trigger('focus');
});

$('#newItemCreator').on('shown.bs.modal', function () {
    $('#itemName').trigger('focus');
});

$('#createNewClass').on('click', function () {
    var classCreationForm = $('#classCreationForm').serializeArray();
    console.log(classCreationForm);

    $.each($('input[name="saveproficiencies"]:checked'), function(){
        console.log("Save:", $(this).val());
    });

    $.each($('input[name="classskills"]:checked'), function(){
        console.log("Skill:", $(this).val());
    });
});
