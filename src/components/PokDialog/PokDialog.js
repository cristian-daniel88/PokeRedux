import React from "react";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import * as cartActions from "../../redux/cart/cartActions";

import {
  DialogShow,
  Dialog,
  DialogBanner,
  DialogBannerName,
 
  DialogFooter,
  ConfirmButton,
} from "./PokDialogStyles";

function PokDialogPepito({ openPok, setOpenPok }) {
  const dispatch = useDispatch();

  const handleClose = (e) => {
    if (e.target.id === "food__dialog") {
      setOpenPok();
    }
  };

  const addToOrder = () => {
    dispatch(cartActions.addItem(openPok));
    setOpenPok();
  };


  return (
    <DialogShow id="food__dialog" onClick={(e) => handleClose(e)}>
      <Dialog>
        <DialogBanner img={openPok.img}>
          <DialogBannerName>{openPok.name}</DialogBannerName>
        </DialogBanner>
        {/* <DialogContent>
            <p>degsgs</p>
          </DialogContent> */}
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>Agregar: {formatPrice(openPok.price)}</ConfirmButton>
        </DialogFooter>
      </Dialog>
    </DialogShow>
  );
}

export const PokDialog = (props) => {
  if (!props.openPok) return null;

  return <PokDialogPepito {...props} />;
};
