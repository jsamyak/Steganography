# Steganography
Code for hiding an image in a different image.
Text can be converted to an image form of similar dimensions and then that image can be hidden in a different image.

NOTE: The images should be of the same size for complete concealment.

    The logic behind the code:

Each image is made up of several pixels. Each pixel’s color value is determined by the amount of Red, Green and Blue color it has. In hexadecimal (Base 16) system, each of the color’s intensity can range from 0 to 255.

For concealing an image in a different image we take the most significant digits of the color value of the image that needs to be concealed and assign them to the least significant digits of a third image (The final product). The most significant digits of the color value of the third image are same as the most significant digits of the color value of the image in which the concealment is to be done.

    Extraction of the concealed image:

To extract the concealed image, we simply take the least significant digits of the color value of the provided image and assign them as the most significant digits of the color value of a new image. The new image formed is very similar to the actual image that was concealed and thus we are able to extract the hidden image.

This method works because the least significant digits of the color value do not make a great change in the color of an image thus making it difficult to differentiate between the original image and image after concealment.
