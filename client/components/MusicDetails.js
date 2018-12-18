import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const MusicDetails = props => {
  const {
    infoTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{
              uri: `http://direct.napster.com/imageserver/v2/artists/${
                props.artistId
              }/images/633x422.jpg`
            }}
          />
        </View>
        <View style={infoTextStyle}>
          <Text style={headerTextStyle}>{props.title}</Text>
          <Text>By {props.artistName}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{
            uri: `http://direct.napster.com/imageserver/v2/albums/${
              props.albumId
            }/images/500x500.jpg`
          }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  infoTextStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
    marginLeft: 10,
    marginRight: 10
  }
};

export default MusicDetails;
