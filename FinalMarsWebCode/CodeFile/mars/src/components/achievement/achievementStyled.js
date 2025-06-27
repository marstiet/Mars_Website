@@
-import styled from 'styled-components';
-export const Containerr=styled.div`
-background-color:#0f0f0f;`
-export const IrcHolder = styled.div`
-  margin-bottom: 10%;
-  background-image: linear-gradient(#110e0f, #110e0f, #110e0f, #110e0f, #1c120e,rgb(14, 13, 13));
-  height: 100%;
-`;
-
-export const ImageWrapper = styled.div`
-  position: relative;
-  width: 100%;
-  height: 160%;
-  overflow: hidden;
-`;
-
-export const MainImg = styled.img`
-  width: 100%;
-  height: 70%;
-  display: block;
-`;
-
-export const GradientOverlay = styled.div`
-  position: absolute;
-  top: -30%;
-  bottom: 0;
-  left: 0;
-  right: 0;
-  height: 100%;
-  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(6, 6, 6, 0.91) 100%);
-`;
-
-export const Wrapper = styled.div`
-  position: relative;
-  width: 100%;
-  height: 100%;
-  margin-top: 90px;
-  overflow: hidden;
-`;
-
-export const Img = styled.img`
-  width: 100%;
-  height: 100%;
-  object-fit: contain;
-  display: block;
-`;
-
-export const BottomGradient = styled.div`
-  position: absolute;
-  bottom: 0;
-  left: 0;
-  right: 0;
-  margin: 0 8%;
-  height: 70%;
-  background: linear-gradient(to top, rgba(15, 14, 14, 0.8), transparent);
-  z-index: 1;
-  pointer-events: none;
-`;
-
-export const DemoDiv = styled.div`
-  width: 100%;
-  height: 100%;
-`;
-
-export const BackgroundTop = styled.div`
-  width: 100%;
-  height: 90vh;
-  border-radius: 20px;
-`;
-
-export const BackgroundTopHeading = styled.div`
-  margin-top: -1300px;
-  color: white;
-  margin-left: 180px;
-  font-size: 110px;
-  font-weight: 550;
-  font-family: "Poppins", sans-serif;
-  font-style: italic;
-  letter-spacing: -5px;
-  line-height: 8rem;
-  text-shadow: 2px 2px 2px #000, 4px 4px #f16837;
-  position: absolute;
-  z-index: 1;
-`;
-
-export const SecImg = styled.div`
-  display: flex;
-  justify-content: center;
-  align-items: center;
-  margin-top: 20px;
-`;
-
-export const SecImgHolder = styled.div`
-  width: 180vw;
-  height: 600px;
-`;
-
-export const SecImgHolderHeading = styled.div`
-  color: white;
-  position: absolute;
-  right: 90px;
-  margin-top: -150px;
-  z-index: 2;
-`;
-
-export const SecImgSubHeading = styled.p`
-  font-size: 35px;
-  font-weight: 400;
-  font-family: "Poppins", sans-serif;
-  font-style: italic;
-  margin-top: 40px;
-`;
-
-export const SecImgHeading = styled.p`
-  font-size: 120px;
-  font-family: "Poppins", sans-serif;
-  font-style: italic;
+import styled from 'styled-components';
+export const Containerr=styled.div`
+  background-color:#0f0f0f;
+`;
+export const IrcHolder = styled.div`
+  margin-bottom: 10%;
+  background-image: linear-gradient(#110e0f, #110e0f, #110e0f, #110e0f, #1c120e,rgb(14, 13, 13));
+  height: 100%;
+`;
+
+export const ImageWrapper = styled.div`
+  position: relative;
+  width: 100%;
+  height: 160%;
+  overflow: hidden;
+  @media (max-width: 900px) {
+    height: auto;
+  }
+`;
+
+export const MainImg = styled.img`
+  width: 100%;
+  height: 70%;
+  display: block;
+  @media (max-width: 900px) {
+    height: auto;
+    max-height: 60vw;
+    object-fit: cover;
+  }
+`;
+
+export const GradientOverlay = styled.div`
+  position: absolute;
+  top: -30%;
+  bottom: 0;
+  left: 0;
+  right: 0;
+  height: 100%;
+  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(6, 6, 6, 0.91) 100%);
+`;
+
+export const Wrapper = styled.div`
+  position: relative;
+  width: 100%;
+  height: 100%;
+  margin-top: 90px;
+  overflow: hidden;
+  @media (max-width: 900px) {
+    margin-top: 40px;
+  }
+`;
+
+export const Img = styled.img`
+  width: 100%;
+  height: 100%;
+  object-fit: contain;
+  display: block;
+`;
+
+export const BottomGradient = styled.div`
+  position: absolute;
+  bottom: 0;
+  left: 0;
+  right: 0;
+  margin: 0 8%;
+  height: 70%;
+  background: linear-gradient(to top, rgba(15, 14, 14, 0.8), transparent);
+  z-index: 1;
+  pointer-events: none;
+  @media (max-width: 900px) {
+    margin: 0 2%;
+    height: 30%;
+  }
+`;
+
+export const DemoDiv = styled.div`
+  width: 100%;
+  height: 100%;
+`;
+
+export const BackgroundTop = styled.div`
+  width: 100%;
+  height: 90vh;
+  border-radius: 20px;
+  @media (max-width: 900px) {
+    height: 30vh;
+  }
+`;
+
+export const BackgroundTopHeading = styled.div`
+  margin-top: -1300px;
+  color: white;
+  margin-left: 180px;
+  font-size: 110px;
+  font-weight: 550;
+  font-family: "Poppins", sans-serif;
+  font-style: italic;
+  letter-spacing: -5px;
+  line-height: 8rem;
+  text-shadow: 2px 2px 2px #000, 4px 4px #f16837;
+  position: absolute;
+  z-index: 1;
+  @media (max-width: 900px) {
+    font-size: 10vw;
+    margin-top: -30vw;
+    margin-left: 5vw;
+    line-height: 1.2;
+    width: 90vw;
+    text-align: center;
+    letter-spacing: -2px;
+  }
+`;
+
+export const SecImg = styled.div`
+  display: flex;
+  justify-content: center;
+  align-items: center;
+  margin-top: 20px;
+  @media (max-width: 900px) {
+    flex-direction: column;
+    margin-top: 10px;
+  }
+`;
+
+export const SecImgHolder = styled.div`
+  width: 180vw;
+  height: 600px;
+  @media (max-width: 900px) {
+    width: 95vw;
+    height: auto;
+  }
+`;
+
+export const SecImgHolderHeading = styled.div`
+  color: white;
+  position: absolute;
+  right: 90px;
+  margin-top: -150px;
+  z-index: 2;
+  @media (max-width: 900px) {
+    position: static;
+    margin: 20px 0 0 0;
+    right: 0;
+    text-align: center;
+  }
+`;
+
+export const SecImgSubHeading = styled.p`
+  font-size: 35px;
+  font-weight: 400;
+  font-family: "Poppins", sans-serif;
+  font-style: italic;
+  margin-top: 40px;
+  @media (max-width: 900px) {
+    font-size: 6vw;
+    margin-top: 20px;
+  }
+`;
+
+export const SecImgHeading = styled.p`
+  font-size: 120px;
+  font-family: "Poppins", sans-serif;
+  font-style: italic;
+  @media (max-width: 900px) {
+    font-size: 12vw;
+    text-align: center;
+  }
 `;
