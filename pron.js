$(document).ready(function() {

    const wordList = [

        "ability","able","about","above","accept","accident",
        "account","accurate","act","action","active","activity",
        "add","addition","adjective",
        "advice","affect","afraid","again","against","age",
        "ago","agree","ahead","aid","alike","alive",
        "allow","alone","aloud","alphabet",
        "among","amount","angle","angry",
        "animal","announce","ant",
        "anything","anyway","apply",
        "around","arrange","arrangement",
        "arrive","aside","ask","asleep",
        "attach","attack","attempt",
        "attention", "available","average","avoid",
        "away","baby","back","bad","badly","bag","balance",
        "balloon","band","bank","base",
        "basic","basis", "bat","bean",
        "beat","beautiful","beauty","become",
        "bee","beginning","behind",
        "believe","below","beneath","bent",
        "beside","best","bet","between","bicycle",
        "biggest","bill","bit","bite",
        "black","blanket","blood","blow",
        "blue","boat","bone","book",
        "both","bow","bowl","boy",
        "brass", "bread","breakfast","breath",
        "brick","bridge","bring",
        "buffalo",
        "build","building","bury","bus","bush",
        "business","busy","but","buy","cabin","cage",
        "cake","calm","camera","camp","canal",
        "cap","captain","case","castle",
        "cat","catch","cave","cell","cent",
        "central","century","chain",
        "chance","change",
        "check","cheese","chemical",
        "citizen",
        "city","class","classroom","clay",
        "climate",
        "clothing","club","coal","coat",
        "collect","combine",
        "come","command","community","company",
        "compass","complete",
        "condition","construction",
        "contain","control","cook","cookie",
        "cool","correct","country","couple","cow","cowboy","crack","create","crew",
        "cry","cup","current",
        "custom","cut","daily","damage","dance","date","day","dead","deal",
        "death","decide","deep","deeply","definition",
        "degree","depend","depth","describe","design","desk",
        "develop","development","die","difference",
        "different","difficult","difficulty","dig","direct","direction",
        "directly","discovery","discuss","discussion",
        "disease","dish","distance","distant","divide","division",
        "double","doubt","down","dozen","dream",
        "dress","dry","duck","dull",
        "dust","each","easily","east","easy","eat",
        "edge","education","effect","egg","eight","electric",
        "electricity","element","elephant","eleven","empty","end","enemy",
        "engine","enjoy","enough",
        "equal","equipment","escape","especially","essential",
        "establish","even","evening","event","every","everybody",
        "everything","evidence","exact","exactly","examine","example",
        "excellent","except","exchange","excitement","exciting","exclaimed",
        "exist","expect","experiment","explain","explanation","express",
        "expression","extra","eye","face","fact",
        "fail","family","famous",
        "fast","fat",
        "feed","feel",
        "fellow", "fence","few","field",
        "fifteen","fifth","fifty","fight","fill",
        "film","fine","finest","finish",
        "fish","five","fix","flag",
        "flat","flow",
        "fly","folks","food","foot",
        "free","freedom","frequent","fresh",
        "friendly","frighten",
        "full","fully","fun","function","funny","gain","game","gas","gasoline","gate",
        "general","generally","gentle","get",
        "gift","give","glad","glass",
        "go","golden","good","goose",
        "grab",
        "graph","grass","gravity","great",
        "grow",
        "guess","guide","gulf","gun","habit",
        "hand","handle","handsome","hang","happen",
        "happily","happy","hat",
        "hay","head","health",
        "heat","heavy","height","help",
        "helpful","hide","high",
        "highway","hill","him","himself","his","history",
        "hit","hole","home","hope","house","how",
        "human","hundred","hungry","hunt","husband","ice","identity", "ill",
        "imagine","improve","in","inch",
        "include","including","income","increase","indeed","independent","indicate","industry","inside","instance","instant","instead",
        "instrument","interest","invented","island","it","itself","jack","jet",
        "join","joy","judge","jump","jungle",
        "just","keep","key","kid","kill", "kitchen",
        "knife","know","label","lack",
        "lady","lake","lamp","land","language","last","late",
        "laugh","lay","lead","leaf",
        "leave","left","leg","length","lesson","let","level",
        "library","lie","life","lift","light","like","likely","limited",
        "line","lips","liquid","list","listen","little","live",
        "living","load","local","locate","location","lonely",
        "look","loose","lose","loud",
        "love","lovely","low","luck","lucky","lunch","lung",
        "machine","machinery","mad","magic","magnet","mail",
        "main","main","make","man","manage",
        "manufacturing","many","map","mass","massage",
        "mathematics","may","maybe","me","meal",
        "mean","meat","medicine","meet","melt",
        "memory","mental","metal","method",
        "middle","might","mighty","military","milk","mill",
        "mineral","missing","mission","mistake",
        "mix","moment","money","monkey",
        "month","mood","moon","mostly",
        "motion","mountain","mouse","mouth","move","movement","movie",
        "mud","muscle","music","musical","must","my","myself",
        "nail","name","nation","national","native","natural",
        "necessary","neck",
        "needle","need","negative","nest",
        "new","news","nice","night","nine",
        "no","nobody","noise","none","noon",
        "nose","note","nothing","notice","noun","now",
        "numeral","nuts","obtain","occasionally",
        "ocean","official",
        "old","only",
        "open","opinion","original",
        "out","outline","outside","own",
        "pack","package","page","pain","paint",
        "palace","pale","pan","paragraph","parallel",
        "pass","passage","past","path","pay","peace","pen",
        "pencil","people","pet","physical","piano","pick","pie","piece","pig","pilot","pine","pink",
        "pipe","pitch","plan","planet",
        "plastic","play","pleasant",
        "plenty","plus",
        "pole","police","policeman","political","pony","pool",
        "position","potatoe","practical","present","president","press",
        "pretty","primitive","principle",
        "private","produce",
        "production","protection",
        "provide","public","pull","pupil","push","put","question","quick",
        "quickly","rabbit","race","radio","railroad",
        "rain","raise","rate",
        "ray","read","ready","reason","receive","recent","recently",
        "red","refuse","region","relationship","religious",
        "remain","remove","repeat","replace","reply",
        "represent","respect","result","review",
        "rhyme","rhythm","rice","rich","ride","riding","right","ring",
        "rise","road","roll","roof","room","root","rope","rough",
        "row","rub","rule","run",
        "running","rush","sad","saddle","safe","safety","sail",
        "salmon","same","sand","satellite",
        "save","say","scene",
        "scientific","scientist","sea",
        "season","seat","second","secret","section","see","seed","seeing",
        "seem","seldom","select","selection","sell","send","sense",
        "sentence","separate","set",
        "setting","settle","seven","several","shade","shadow","shake",
        "shallow","shape","sheep",
        "sheet","shelf","shell","shine","ship",
        "shoe","shoot",
        "shout","show", "shut","sick","side","sight",
        "sign","signal","silence","silent","silk","silly",
        "simple","simply","since","sing","single","sink",
        "sit","sitting","situation","six","size","skill","skin","sky",
        "slab","slightly","slip","slow","slowly","smell",
        "snow","so","soap","social",
        "solution","something","sometime",
        "son","soon","south",
        "special","species","specific",
        "spell","spin","statement","station","stay",
        "steady","steam","stem","step","step","stick",
        "stiff","still","stomach",
        "structure","struggle","stuck","student",
        "substance","success","successful","such","sudden","suddenly",
        "suggest","suit","sum","sun","sunlight","supply",
        "suppose","swim","swing","syllable","symbol","system",
        "table","tail","take","tale","tank",
        "tape","task","tax","tea",
        "team","telephone","television","tell","ten",
        "tent","terrible","test","thank","then",
        "thick","thin","thing","think","this",
        "though","thousand","thread","three",
        "through","throughout","throw","thumb","tide",
        "tie","tight","time","tin","tiny","tip",
        "title","tobacco","today",
        "tone","tongue","tonight","tool","total","touch","toy",
        "track","traffic","trap","travel",
        "treat","tree","trick","trip",
        "trouble","truck","try","tube","tune",
        "twenty","type","typical","uncle",
        "unhappy","union","unknown",
        "unless","until","unusual","up","us",
        "use","useful","valley","valuable",
        "vast","vegetable","very",
        "vessel","victory","view","village","visit","voice",
        "vote","wagon","wait","waste",
        "wave","way","weak","wealth",
        "weigh","weight","welcome","well","west",
        "wet","whale","wheat","whistle","white",
        "who","whole","why","wide","widely","wife",
        "willing","win","wind","window","wing",
        "wise","wish","with","within","without","wolf","woman",
        "wood","wooden","wool","wrap","write","writing",
        "yellow","yes","yet","you","young",
        "youth","zebra","zoo",
      ]


    //avoid global variables
    var ipa

    //event listeners for see word and see answer
    $('#viewing-button').on('click', seeWord)
    $('#answer-button').on('click', seeAnswer)

    //I would prefer a new word to be generated automatically rather than the user having to click a button
    function newWord() {

        let randomWord = wordList[Math.floor(Math.random()*wordList.length)]

        axios.get("https://dictionaryapi.com/api/v3/references/learners/json/" + randomWord + "?key=083cdcb6-cd9f-4856-a7b6-21c474d149c8")
        .then(function (response) {

            //display word
            $('#word-div').html(randomWord)

            // let def = response.data[0].shortdef[0].toString().charAt(0).toUpperCase() + response.data[0].shortdef[0].toString().slice(1) + "."
            // $('#def-div').html(`<p>${def}</p>`)

            ipa = response.data[0].hwi.prs[0].ipa.toString().replace(/ɛ/g, "e").replace(/i/g, "i:").replace(/oʊ/g, "əʊ").replace(":ː", ":").replace("ˌ", "").replace("oɪ", "ɔɪ").replace("ː", ":").replace("ˈ", "'").replace("n̩", "ən").replace("l̟", "əl")

            /*in Merriam-Webster, even one-syllable words have the stress marker which I wanted to remove. 
            Unfortunately there were a lot of one-syllable words with more than 5 characters so I just removed
            them from the list */
            if (ipa.charAt(0) ==="'" && ipa.length<6) {
                ipa = ipa.replace("'", "")
            } else {
                ipa = ipa
            }

            //make IPA available 
            $('#answer-word-div').html(`<p>${ipa}</p>`)

            //add audio
            let audioUrl = "https://media.merriam-webster.com/soundc11/" + response.data[0].hwi.prs[0].sound.audio.toString().charAt(0) + "/" + response.data[0].hwi.prs[0].sound.audio + ".wav"
            $('audio').html(`<source>`)
            const audio = $('audio').get(0)
            audio.src = audioUrl
            //apparently this is required to 'refresh' after changing src
            audio.load()
            
            //fade in these elements
            $('#audio-div').fadeIn()
            $('#viewing-div').fadeIn()
            $('#answer-div').fadeIn()

            //hide these if they were opened for previous word
            $('#word-div').css('visibility', 'hidden')
            $('#answer-word-div').css('visibility', 'hidden')



        })
        .catch(function(err) {
            console.log(err)
            $('#image-div').html('')
        })
    }

    newWord()

    function seeWord() {

        if ($('#word-div').css('visibility') == 'hidden') {
            $('#word-div').css({'opacity': 0, 'visibility':'visible'}).animate({'opacity': 1})
        } else {
            $('#word-div').css('visibility','hidden');
            }
    }


    function seeAnswer() {

        if ($('#answer-word-div').css('visibility') == 'hidden') {
            $('#answer-word-div').css({'opacity': 0, 'visibility':'visible'}).animate({'opacity': 1})
        } else {
            $('#answer-word-div').css('visibility','hidden');
            } 
        }

    $('#word-counter').html(`Word #1`)

    $('#score-div').html(`Score: 0`)

    /* this is a module - a way to organise code that utiilses closure so that variables are private (this type of 
    function, wrapped in brackets and with brackets at the end to call it, is called an IIFE) */

    var scoreInfo = (function(){
        var score = 0;
    
        return {
            getScore: function(){
                 return score  
            },
            incrScore: function(){
                 score++;  
                 $('#score-div').html(`Score: ${score}`)
            },
            resetScore: function(){
                score = 0
                $('#score-div').html(`Score: ${score}`)
            }
        };
    })();


    var livesInfo = (function() {
        let lives = 3

        return {
            getLives: function(){
                return lives
            },
            decrLives: function() {
                lives--
                if (lives == -1) {
                    setTimeout(gameOver, 1800)
        
                } else {
                    $(`#heart${lives}`).css({opacity: 1, visibility: "visible"}).animate({opacity: 0});
                }
            },
            resetLives: function() {
                lives=3
                $(`.fa-heart`).css({opacity: 1, visibility: "visible"})

            }
        }
    })()




    var wordCount = (function() {
        let wordCounter = 1
        return {
            wordCountIncr: function() {
                wordCounter++
                $('#word-counter').html(`Word #${wordCounter}`)
            },
            wordCountReset: function() {
                wordCounter = 0
                $('#word-counter').html(`Word #${wordCounter}`)
            }
        
        }
    })()


    

   const keyArray = ["i:", "ɪ", "ʊ", "u:", "e", "ə", "ɜ:", "ɔ:", "æ", "ʌ", "a:", "ɒ", "ɪə", "eɪ", "ʊə", "ɔɪ", "əʊ", "eə", "aɪ", "aʊ", "p", "b", "t", "d", "tʃ", "ʤ", "k", "g", "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "m", "n", "ŋ", "h", "*", "*", "l", "r", "w", "j", "'", ":", "*", "*"]



    function generateKeyboard() {
        /* I've had to add 4 useless keys to keyboard to make it a full 'grid' so keys have regular row and col numbers
        so that the user can navigate with arrow keys. Maybe these keys can be made invisible and the user can be
        prevented from navigating onto them? */
        const keysArea = $('#keys-area')
        let rowNumber = 0
        let colNumber = 0

        for (let i=0; i<keyArray.length; i++) {

                let newButton = $('<button></button>')
                newButton.addClass("key")
                newButton.click(handleClick)
                newButton.html(keyArray[i])
                newButton.attr("id", keyArray[i])
                newButton.attr("data-row", rowNumber)
                newButton.attr("data-col", colNumber)
                keysArea.append(newButton)
                colNumber++

                if(i>=9 && i<19) {
                    rowNumber = 1
                } else if (i>=19 && i<29) {
                    rowNumber = 2
                } else if (i>=29 && i<39) {
                    rowNumber = 3
                } else if (i>=39 && i<49) {
                    rowNumber = 4
                } else if (i>=49) {
                    rowNumber = 3
                }

                if(colNumber >=10) {
                    colNumber = 0
                }
    }
    }

    generateKeyboard()
    
    function handleClick(e) {
        let textInput = $("#text-input")
        let text
 
        switch(e.target.id) {
            case "i:":
                text = "i:";
                break;
            case "ɪ":
                text = "ɪ";
                break;
            case "ʊ":
                text = "ʊ";
                break;
            case "u:":
                text = "u:";
                break;
            case "e":
                text = "e";
                break;
            case "ə":
                text = "ə";
                break;
            case "ɜ:":
                text = "ɜ:";
                break;
            case "ɔ:":
                text = "ɔ:";
                break;
            case "æ":
                text = "æ";
                break;
            case "ʌ":
                text = "ʌ";
                break;
            case "a:":
                text = "a:";
                break;
            case "ɒ":
                text = "ɒ";
                break;
            case "ɪə":
                text = "ɪə";
                break;
            case "eɪ":
                text = "eɪ";
                break;
            case "ʊə":
                text = "ʊə";
                break;
            case "ɔɪ":
                text = "ɔɪ";
                break;
            case "əʊ":
                text = "əʊ";
                break;
            case "eə":
                text = "eə";
                break;
            case "aɪ":
                text = "aɪ";
                break;
            case "aʊ":
                text = "aʊ";
                break;
            case "p":
                text = "p";
                break;
            case "b":
                text = "b";
                break;
            case "t":
                text = "t";
                break;
            case "d":
                text = "d";
                break;
            case "tʃ":
                text = "tʃ";
                break;
            case "ʤ":
                text = "ʤ";
                break;
            case "k":
                text = "k";
                break;
            case "g":
                text = "g";
                break;
            case "f":
                text = "f";
                break;
            case "v":
                text = "v";
                break;
            case "θ":
                text = "θ";
                break;
            case "ð":
                text = "ð";
                break;
            case "s":
                text = "s";
                break;
            case "z":
                text = "z";
                break;
            case "z":
                text = "z";
                break;
            case "ʃ":
                text = "ʃ";
                break;
            case "ʒ":
                text = "ʒ";
                break;
            case "m":
                text = "m";
                break;
            case "n":
                text = "n";
                break;
            case "ŋ":
                text = "ŋ";
                break;
            case "h":
                text = "h";
                break;
            //for useless keys
            case "*":
                text = "*";
                break;
            case "l":
                text = "l";
                break;
            case "r":
                text = "r";
                break;
            case "w":
                text = "w";
                break;
            case "j":
                text = "j";
                break;
            case "'":
                text = "'";
                break;
            case ":":
                text = ":";
                break;
        }

        /* I got this code from Stack Overflow. It allows the user to move cursor position back inside the 
        text they've written and then to add more text. Previously any new text was added to the end
        regardless of where the cursor was. (.selectionStart gets the cursor position)*/
        let caretPos = textInput[0].selectionStart;
        let currentText = textInput.val();
        textInput.val(currentText.substring(0, caretPos) + text + currentText.substring(caretPos))

    }

  
    /* I also got this from Stack Overflow. It keeps the focus in the text input. Previously it lost focus whenever
    the user clicked on one of the keys on the virtual keyboard and it was annoying to have to keep clicking
    back inside the input */
    $('#text-input').on('blur',function () { 
        var blurEl = $(this); 
        setTimeout(function() {
            blurEl.focus()
        }, 10);
    })

    const correctMessages = [
        'Well done!',
        'Great job!',
        'You rock!',
        'Awesome!',
        'Amazing!'
    ]

    const incorrectMessages = [
        'Wrong!',
        'Bad luck!',
        'I\'m afraid not!',
        'Incorrect!'
    ]

    function correctAlert() {
        var correctSound = document.getElementById("correct-sound")
        correctSound.play()
        let correctMessage = correctMessages[Math.floor(Math.random()*correctMessages.length)]
        $('#modal-paragraph').html(correctMessage)
        $('#myModal').fadeIn('slow')
        setTimeout(function() {
          $('#myModal').fadeOut('slow')
      }, 800)
      }

      function incorrectAlert() {
        var incorrectSound = document.getElementById("incorrect-sound")
        incorrectSound.play()

        if (livesInfo.getLives() == 1) {
            $('#modal-paragraph').html('No lives left!')
            $('#myModal').fadeIn('slow')
            setTimeout(function() {
              $('#myModal').fadeOut('slow')
          }, 800)
        } else {
        let incorrectMessage = incorrectMessages[Math.floor(Math.random()*incorrectMessages.length)]
        $('#modal-paragraph').html(incorrectMessage)
        $('#myModal').fadeIn('slow')
        setTimeout(function() {
          $('#myModal').fadeOut('slow')
      }, 800)
    }
      }

      function gameOver() {
        $('#modal-paragraph').html('Game over!')
        $('#myModal').fadeIn('slow')
        setTimeout(function() {
          $('#myModal').fadeOut('slow')
      }, 800)
      livesInfo.resetLives()
      scoreInfo.resetScore()
      wordCount.wordCountReset()
      
      }

    function checkAnswer() {
        const textInput = $("#text-input")
        const userAnswer = textInput.val()
        const regexStress = /'/
        
        if (userAnswer == ipa) {
            correctAlert()
            scoreInfo.incrScore()
            setTimeout(function () {
                textInput.val('')
            }, 1000) 
            newWord()
            wordCount.wordCountIncr()
        } else if (userAnswer != ipa && regexStress.test(userAnswer) == false && regexStress.test(ipa) == true) {
                const answerMinusStress = ipa.replace("'", "")
                if (answerMinusStress == userAnswer) {
                    alert('Did you mark the stress?')
                } else {
                    incorrectAlert()
                    livesInfo.decrLives()  
                    setTimeout(function () {
                        textInput.val('')
                    }, 1000)
                    newWord()
                    wordCount.wordCountIncr()
                }
        } else {
            incorrectAlert()
            livesInfo.decrLives()  
            setTimeout(function () {
                textInput.val('')
            }, 1000)
            newWord()
            wordCount.wordCountIncr()
        }
}

    $('#check-button').click(checkAnswer)

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        switch (evt.keyCode) {
            case 37:
                evt.preventDefault()
                leftArrowPressed();
                break;
            case 39:
                evt.preventDefault()
                rightArrowPressed();
                break;
            case 40:
                evt.preventDefault()
                downArrowPressed();
                break;
            case 38:
                evt.preventDefault()
                upArrowPressed();
                break;
            case 13:
                evt.preventDefault()
                enterPressed();
                break;
        }
    }

    let currentRow = 0
    let currentCol = 0

    $(`button[data-col=${currentCol}][data-row=${currentRow}]`).addClass("selected")

    function leftArrowPressed() {
        if (currentCol !== 0) {
            if (currentCol === 2 && currentRow === 4) {
                return
            } else {
            currentCol--
            $('.selected').removeClass("selected")
            $(`button[data-col=${currentCol}][data-row=${currentRow}]`).addClass("selected")
        }
    }
    }

    function rightArrowPressed() {
        if (currentCol !== 9) {
            if (currentCol === 7 && currentRow === 4) {
                return
            } else {
            currentCol++
            $('.selected').removeClass("selected")
            $(`button[data-col=${currentCol}][data-row=${currentRow}]`).addClass("selected")}
        }
    }

    function downArrowPressed() {
        if (currentRow !== 4) {
            if (currentRow === 3 && currentCol === 0) {
                return
            } else if (currentRow === 3 && currentCol === 1) {
                return
            } else if (currentRow === 3 && currentCol === 8) {
                return
            } else if (currentRow === 3 && currentCol === 9) {
                return
            } else {
            currentRow++
            $('.selected').removeClass("selected")
            $(`button[data-col=${currentCol}][data-row=${currentRow}]`).addClass("selected")
        }
        }
    }

    //hide useless buttons
    $('button[data-col=0][data-row=4]').hide()
    $('button[data-col=1][data-row=4]').hide()
    $('button[data-col=8][data-row=4]').hide()
    $('button[data-col=9][data-row=4]').hide()

    function upArrowPressed() {
        if (currentRow !== 0) {
            currentRow--
            $('.selected').removeClass("selected")
            $(`button[data-col=${currentCol}][data-row=${currentRow}]`).addClass("selected")
        }
    }

    function enterPressed() {
        let textInput = $('#text-input')
        let text = $('.selected').attr('id')

        /* This is the same code used before for when the user clicks on the button. Necessary to allow
        user to make changes to text they've written */
        let caretPos = textInput[0].selectionStart;
        let currentText = textInput.val();
        textInput.val(currentText.substring(0, caretPos) + text + currentText.substring(caretPos))
    }


    
    

})