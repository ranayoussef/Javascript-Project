//declerations
const productContainer = document.querySelector(".ibox-contents")
const productNumbers = document.querySelector(".pull-right strong")
const totalprice =document.querySelector(".ibox-content h2")
//display the total
totalprice.innerHTML=`$50`;
//display the item number
let productnumber = localStorage.getItem("productsnumber")
if(productnumber!=null)
productNumbers.innerHTML = `${productnumber}`;
else
productNumbers.innerHTML = `1`;
// display the card
function displayCard() {
    let cartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(cartItems);
    //console.log( cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML='';
        Object.values(cartItems).map(item => {
            item["products"].map(item2 => {
                productContainer.innerHTML += `
            <div class="ibox-content">
            <div class="table-responsive">
                <table class="table shoping-cart-table">
                    <tbody>
                    <tr>
                        <td width="90">
                          <img src="${item2.thumbnail}" style="height:100px;width:100px">
                        </td>
                        <td class="desc">
                            <h3>
                                <a href="#" class="text-navy">
                                   ${item2.title}
                                </a>
                            </h3>
                            <p class="small">
                                ${item2.description}
                            </p>
                            <dl class="small m-b-none">
                                <dt>Category</dt>
                                <dd>${item2.category}</dd>
                            </dl>
                            <dl class="small m-b-none">
                            <dt>Brand Name</dt>
                            <dd>${item2.brand}</dd>
                        </dl>
    
                            <div class="m-t-sm">
                                <a href="#" class="text-muted"><i class="fa fa-gift"></i> Add gift package</a>
                                <a href="#" id="r" class="text-muted"><i class="fa fa-trash"></i> Remove item</a>
                            </div>
                        </td>
                        <td>
                            $${item2.price}
                        </td>
                        <td width="65">
                            <input type="text" class="form-control" placeholder="1">
                        </td>
                        <td>
                            <h4>
                                $${parseInt(parseInt(item2.price) - (parseInt(item2.price) * parseFloat(1 / item2.discountPercentage)))}
                            </h4>
                        </td>
    
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
            `
            })
        })
    }
}

displayCard()