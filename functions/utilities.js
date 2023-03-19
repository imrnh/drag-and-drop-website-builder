function generate_random_class_name(){
    const part1 = (Math.random() * 1e17).toString()
    const part2 = (Math.random() * 1e17).toString()
    const part3 = (Math.random() * 1e17).toString()
    const part4 = (Math.random() * 1e17).toString()
    const part5 = (Math.random() * 1e17).toString()

    return part1.concat(part2.concat(part3.concat(part4.concat(part5))));
}