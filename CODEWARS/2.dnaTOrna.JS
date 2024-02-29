function DNAtoRNA(dna) {
    return dna
    .split('')
    .map((el) => (el ==='T' ? 'U' : el))
    .join('');
    // create a function which returns an RNA sequence from the given DNA sequence
  }


console.log(DNAtoRNA('JANCTK'))