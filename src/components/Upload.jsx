import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import Popup from "./Popup";
import imgur, { imgurDelete } from "./imgur";
import ocr from "./ocrApi";
import { useSnackbar } from "notistack";

const Input = styled("input")({
  display: "none",
});

function Main() {
  const [status, setstatus] = useState(false);
  const [image, setimage] = useState(null);
  const [data, setdata] = useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showPopup = (message, type) => {
    enqueueSnackbar(message, {
      variant: type,
    });
  };
  const uploadImage = (e) => {
    setstatus(true);
    e.preventDefault();
    showPopup("Uploading image to server", "info");
    imgur
      .post("/3/image", image)
      .then((response) => {
        let imgResp = response.data.data;
        console.log(imgResp.link, imgResp.id);
        showPopup("Image uploaded successfully", "success");

        extractText(imgResp);
      })
      .catch((err) => {
        console.log("Imgur: ", err);
        showPopup("Failed to upload Image to server", "error");
        setstatus(false);
      });
  };

  const extractText = (imageResponse) => {
    showPopup("Starting OCR detection", "info");
    ocr
      .get("/", {
        params: {
          filename: `${imageResponse.id}` + ".png", //changethis
          imageurl: `${imageResponse.link}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
        setstatus(false);
        setimage(null);
        showPopup("OCR detection completed", "success");
        deleteImage(imageResponse.deletehash);
      })
      .catch((err) => {
        setstatus(false);
        showPopup("OCR detection failed", "error");
      });
  };

  const deleteImage = (hash) => {
    imgurDelete
      .delete(`/image/${hash}`)
      .then((response) => {
        console.log(response);
        setstatus(false);
        showPopup("Cleaning up image on the server", "info");
      })
      .catch((err) => {
        showPopup("Failed to delete image from the server", "warning");
      });
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
        <Typography variant="h6" marginTop="3em">
          Click the icon to upload the Image and extract text
        </Typography>
        <CardContent>
          <CardActions>
            <form onSubmit={uploadImage}>
              <div style={{ textAlign: "center" }}>
                <label htmlFor="uploadField">
                  <Input
                    accept="image/*"
                    id="uploadField"
                    type="file"
                    onChange={(e) => {
                      setimage(e.target.files[0]);
                    }}
                  />
                  <IconButton
                    color="primary"
                    aria-label="Upload Picture"
                    component="span"
                    size="large"
                  >
                    <PhotoCamera
                      sx={{ transform: "scale(2)" }}
                      color="primary"
                    />
                  </IconButton>
                </label>
              </div>
              <LoadingButton
                type="submit"
                loadingPosition="start"
                variant="contained"
                color="success"
                loading={status}
                startIcon={<ImageSearchIcon />}
                sx={{
                  marginTop: "2em",
                }}
              >
                Extract Text
              </LoadingButton>
            </form>
          </CardActions>
        </CardContent>
      </Card>
      {data && <Popup text={data} />}
    </div>
  );
}

export default Main;
