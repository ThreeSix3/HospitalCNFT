import Animated from "react-native-reanimated";
import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
export default function Alert({content, hide, state, stateOpacity}){
    return(
        <Animated.View
        style={[
          {
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            width: "100%",
            height: Dimensions.get("window").height + 100,
            zIndex: 2,
            display: state ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          },
          stateOpacity,
        ]}
      >
        <View
          style={{
            width: "85%",
            height: "35%",
            backgroundColor: "white",
            borderRadius: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <View style={{ position: "absolute", left: "90%", bottom: "90%" }}>
            <TouchableOpacity
              onPress={() => {
                hide();
              }}
            >
              <Image
                source={require("../assets/images/cerrarNegro.png")}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
          {content}
        </View>
      </Animated.View>
    )
}