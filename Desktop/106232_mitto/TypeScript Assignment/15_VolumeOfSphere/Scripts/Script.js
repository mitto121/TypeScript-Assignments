function calculateSphereVolume() {
    let r = Number(document.getElementById("txtRadius").value);
    let p = Math.PI;
    let volume = ((4 / 3) * p * (r * r * r)).toFixed(4);
    document.getElementById("txtVolume").value = volume.toString();
}
