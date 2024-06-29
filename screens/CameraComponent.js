import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import { Svg, Polyline } from 'react-native-svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CameraComponent = () => {
  const [type, setType] = useState(RNCamera.Constants.Type.front);
  const [box, setBox] = useState(null);
  const cameraRef = useRef(null);
  
  const handlerFace = ({faces}) => {
    if (faces[0]) {
      setBox({
        boxs: {
          width: faces[0].bounds.size.width,
          height: faces[0].bounds.size.height,
          x: faces[0].bounds.origin.x,
          y: faces[0].bounds.origin.y,
          yawAngle: faces[0].yawAngle,
          rollAngle: faces[0].rollAngle,
        },
        rightEyePosition: faces[0].rightEyePosition,
        leftEyePosition: faces[0].leftEyePosition,
        bottomMouthPosition: faces[0].bottomMouthPosition,
        faceVertices: faces[0].faceVertices,
      });
    } else {
      setBox(null);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        captureAudio={false}
        onFacesDetected={handlerFace}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks?.all}
      />
      {box && (
        <>
          <Svg
            height={height}
            width={width}
            style={styles.overlay}
          >
            <Polyline
              points={box.faceVertices.map(point => `${point.x},${point.y}`).join(' ')}
              stroke="white"
              strokeWidth="2"
            />
          </Svg>
          <View style={styles.bound({
            width: box.boxs.width,
            height: box.boxs.height,
            x: box.boxs.x,
            y: box.boxs.y,
          })}>
            <Text style={styles.detectionText}>Face 90% detected</Text>
            <Image
              source={require('../assets/check.png')}
              style={styles.checkMark}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  camera: {
    flexGrow: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  bound: ({width, height, x, y}) => {
    return {
      position: 'absolute',
      top: y,
      left: x - 50,
      height,
      width,
      borderWidth: 5,
      borderColor: 'white',
      zIndex: 3000,
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
  detectionText: {
    color: 'white',
    fontSize: 16,
    position: 'absolute',
    bottom: -30,
    textAlign: 'center',
    width: '100%',
  },
  checkMark: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: -60,
    right: -30,
  },
});