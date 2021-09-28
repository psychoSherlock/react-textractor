import React, { useState } from "react";
import { Card, CardActions, CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import Popup from "./Popup";

const dummy = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis elementum bibendum. Mauris congue faucibus velit nec luctus. Proin ut massa tellus. Nam sit amet purus nec augue egestas venenatis sit amet eget lorem. Integer tempus, libero a tempus eleifend, massa odio malesuada ipsum, vitae commodo orci velit eu justo. Maecenas risus justo, ultricies eget sagittis in, pellentesque vitae magna. Vestibulum vitae metus egestas, dapibus enim facilisis, varius nisi. Suspendisse dolor velit, elementum eu orci vel, tincidunt elementum elit. Phasellus eget enim vel metus fermentum accumsan. Fusce elementum tempor mauris, cursus convallis lectus volutpat quis. Quisque consectetur sem quis tortor consequat, a tristique elit elementum. Donec iaculis dolor non nulla ultrices tincidunt. Suspendisse potenti. Donec ac molestie sem.
Vestibulum rutrum ex sed magna consectetur bibendum. Donec vel dictum lacus. Nunc facilisis condimentum hendrerit. Suspendisse imperdiet placerat dignissim. Duis turpis sapien, blandit id congue ac, vulputate eget urna. Donec sed nisl sit amet nunc rhoncus iaculis. Sed sagittis nibh id nibh semper ornare. Morbi id ipsum eget est lobortis consectetur ac sit amet enim. Nunc nec porta est. Ut nulla metus, cursus sed porta quis, eleifend et odio. Donec consequat bibendum nunc in ultrices. Aliquam scelerisque purus vitae purus venenatis porta. Vestibulum augue dolor, pretium ac viverra suscipit, rhoncus non urna. Cras nec feugiat ante. Integer congue nec est et congue. Proin ut iaculis ex, vitae ullamcorper neque.
Nam consectetur ac odio id pellentesque. Ut viverra sit amet odio eget interdum. Aliquam erat volutpat. Quisque consectetur interdum lacus, id finibus neque elementum a. Aliquam in porttitor ipsum, sit amet elementum quam. Aenean vitae eros non lacus sagittis efficitur. Fusce non ultrices urna, quis dictum massa.
Quisque quis aliquam nisl. Etiam rutrum lorem in nunc dapibus tristique. In hac habitasse platea dictumst. Suspendisse a lorem ac tellus dapibus faucibus. Nulla venenatis tellus in augue lobortis, consectetur consequat ipsum pretium. Nam commodo, justo id tristique finibus, est nulla venenatis orci, nec congue augue arcu eu lorem. Cras interdum massa tellus, sit amet dapibus purus sodales ut. Nulla facilisi. In varius sem massa, nec tristique magna lacinia et. Pellentesque malesuada quam id odio laoreet, vel iaculis est egestas. Nam ullamcorper convallis ligula, ac dapibus tellus elementum id. Sed consectetur rhoncus mauris vel blandit. Phasellus ac urna id elit egestas condimentum. Proin et nisi vestibulum, blandit orci sed, ornare sapien. Sed odio nunc, blandit id arcu ultricies, mollis blandit augue. Maecenas tincidunt massa ac finibus luctus`;

const Input = styled("input")({
  display: "none",
});

function Main() {
  const [status, setstatus] = useState(false);
  const extractText = () => {
    setstatus(true);
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 500,
          minHeight: 300,
          margin: "auto",
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        variant="elevation"
      >
        <CardContent>
          <label htmlFor="uploadField">
            <Input accept="image/*" id="uploadField" type="file" />
            <IconButton
              color="primary"
              aria-label="Upload Picture"
              component="span"
              size="large"
            >
              <PhotoCamera sx={{ transform: "scale(1.8)" }} color="primary" />
            </IconButton>
          </label>
        </CardContent>
        <CardActions>
          <LoadingButton
            loadingPosition="start"
            variant="contained"
            color="success"
            onClick={extractText}
            loading={status}
            startIcon={<ImageSearchIcon />}
          >
            Extract Text
          </LoadingButton>
        </CardActions>
      </Card>
      {status && <Popup text={dummy} />}
    </div>
  );
}

export default Main;
