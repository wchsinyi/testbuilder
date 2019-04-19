  var lenArr = [12, 17]; var l=lenArr.length;
  var preFix = [6304, 5038, 5020, 5018]; var p= preFix.length
  for (var j=0; j <=p; j++) {
    (function(j) { 
      let t = preFix[j].toString()
      it('has a prefix of ' + t + ' and a length of '+12, function () {
        detectNetwork(t + '0'.repeat(12-4)).should.equal('Maestro');
      });    

      it('has a prefix of ' + t + ' and a length of '+12, function () {
        detectNetwork(t + '0'.repeat(12-4)).should.equal('Maestro');
      });
    })(j)
  }

var sprefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759] ; var sprefix_L=sprefix.length
var slen = [16,18,19];var slen_L=slen.length
  for (var t = 0; t <= slen_L; t++) {  
    (function(t) { 
      it('has a prefix of ' + '5018' + ' and a length of '+  slen[t], function () {
        detectNetwork('5018' + '0'.repeat(slen[t]-4)).should.equal('Maestro');
      });    

    })(t)
  }


//input all the test at once 
// detectNetwork('38345678901234');
// detectNetwork('39345678901234');
// detectNetwork('343456789012345');
// detectNetwork('373456789012345');
// detectNetwork('4123456789012');
// detectNetwork('4123456789012340');
// detectNetwork('4123456789012340000');
// detectNetwork('5112345678901230');
// detectNetwork('5212345678901230');
// detectNetwork('5312345678901230');
// detectNetwork('5412345678901230');
// detectNetwork('5512345678901230');

    var expect = chai.expect;
  it('has a prefix of 51 and length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
  it('has a prefix of 52 and length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  }); 
  it('has a prefix of 53 and length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });