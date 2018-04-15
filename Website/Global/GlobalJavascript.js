Global.Debugging = true
Global.Website = "http://localhost:5000/"
const css_properties        = {'alignContent': null,'alignItems'    : null,'alignSelf' : null,'all'    : null,'animation': null,'animationDelay': null,'animationDirection': null,'animationDuration': null,'animationFillMode': null,'animationIterationCount': null,'animationName': null,'animationPlayState': null,'animationTimingFunction': null,'backfaceVisibility': null,'background': null,'backgroundAttachment': null,'backgroundBlendMode': null,'backgroundClip': null,'backgroundColor': null,'backgroundImage': null,'backgroundOrigin': null,'backgroundPosition': null,'backgroundRepeat': null,'backgroundSize': null,'border'  : null,'borderBottom'    : null,'borderBottomColor': null,'borderBottomLeftRadius': null,'borderBottomRightRadius': null,'borderBottomStyle': null,'borderBottomWidth': null,'borderCollapse': null,'borderColor': null,'borderImage': null,'borderImageOutset': null,'borderImageRepeat': null,'borderImageSlice': null,'borderImageSource': null,'borderImageWidth': null,'borderLeft': null,'borderLeftColor': null,'borderLeftStyle': null,'borderLeftWidth': null,'borderRadius': null,'borderRight': null,'borderRightColor': null,'borderRightStyle': null,'borderRightWidth': null,'borderSpacing': null,'borderStyle': null,'borderTop': null,'borderTopColor': null,'borderTopLeftRadius': null,'borderTopRightRadius': null,'borderTopStyle': null,'borderTopWidth': null,'borderWidth': null,'bottom'  : null,'boxDecorationBreak': null,'boxShadow': null,'boxSizing': null,'breakAfter': null,'breakBefore': null,'breakInside': null,'captionSide': null,'caretColor': null,'@charset': null,'clear'     : null,'clip'      : null,'color' : null,'columnCount': null,'columnFill': null,'columnGap': null,'columnRule': null,'columnRuleColor': null,'columnRuleStyle': null,'columnRuleWidth': null,'columnSpan': null,'columnWidth': null,'columns': null,'content'     : null,'counterIncrement': null,'counterReset': null,'cursor'     : null,'direction': null,'display': null,'emptyCells': null,'filter'   : null,'flex' : null,'flexBasis': null,'flexDirection': null,'flexFlow': null,'flexGrow': null,'flexShrink': null,'flexWrap' : null,'float' : null,'font' : null,'@fontFace': null,'fontFamily': null,'fontFeatureSettings': null,'@fontFeatureValues': null,'fontKerning': null,'fontLanguageOverride': null,'fontSize': null,'fontSizeAdjust': null,'fontStretch': null,'fontStyle': null,'fontSynthesis': null,'fontVariant': null,'fontVariantAlternates': null,'fontVariantCaps': null,'fontVariantEastAsian': null,'fontVariantLigatures': null,'fontVariantNumeric': null,'fontVariantPosition': null,'fontWeight': null,'grid'  : null,'gridArea': null,'gridAutoColumns': null,'gridAutoFlow': null,'gridAutoRows': null,'gridColumn': null,'gridColumnEnd': null,'gridColumnGap': null,'gridColumnStart': null,'gridGap': null,'gridRow': null,'gridRowEnd': null,'gridRowGap': null,'gridRowStart': null,'gridTemplate': null,'gridTemplateAreas': null,'gridTemplateColumns': null,'gridTemplateRows': null,'hangingPunctuation': null,'height': null,'hyphens': null,'imageOrientation': null,'imageRendering': null,'imageResolution': null,'@import': null,'justifyContent': null,'@keyframes': null,'left': null,'letterSpacing': null,'lineBreak': null,'lineHeight': null,'listStyle': null,'listStyleImage': null,'listStylePosition': null,'listStyleType': null,'margin': null,'marginBottom': null,'marginLeft': null,'marginRight': null,'marginTop': null,'maxHeight': null,'maxWidth': null,'@media': null,'minHeight': null,'minWidth': null,'objectFit': null,'objectPosition': null,'opacity': null,'order': null,'orphans': null,'outline': null,'outlineColor': null,'outlineOffset': null,'outlineStyle': null,'outlineWidth': null,'overflowWrap': null,'overflowX': null,'overflowY': null,'padding': null,'paddingBottom': null,'paddingLeft': null,'paddingRight': null,'paddingTop': null,'pageBreakAfter': null,'pageBreakBefore': null,'pageBreakInside': null,'perspective': null,'perspectiveOrigin': null,'pointerEvents': null,'position': null,'quotes': null,'resize': null,'right': null,'tabSize': null,'tableLayout': null,'textAlign': null,'textAlignLast': null,'textCombineUpright': null,'textDecoration': null,'textDecorationColor': null,'textDecorationLine': null,'textDecorationStyle': null,'textIndent': null,'textJustify': null,'textOrientation': null,'textOverflow': null,'textShadow': null,'textTransform': null,'textUnderlinePosition': null,'top': null,'transform': null,'transformOrigin': null,'transformStyle': null,'transition': null,'transitionDelay': null,'transitionDuration': null,'transitionProperty': null,'transitionTimingFunction': null,'unicodeBidi': null,'userSelect': null,'verticalAlign': null,'visibility': null,'whiteSpace': null,'widows': null,'width': null,'wordBreak': null,'wordSpacing': null,'wordWrap': null,'writingMode': null,'zIndex': null}
const html_attributes       = { 'accept'     : null, 'acceptCharset': null, 'accesskey': null, 'action': null, 'align'   : null, 'alt'          : null, 'async'            : null, 'autocapitalize'  : null, 'autocomplete'    : null, 'autofocus'             : null, 'autoplay'    : null, 'bgcolor'          : null, 'border'                : null, 'buffered'         : null, 'challenge': null, 'charset'            : null, 'checked'           : null, 'cite'         : null, 'class'         : null, 'code'          : null, 'codebase'       : null, 'color'            : null, 'cols'           : null, 'colspan'      : null, 'content': null, 'contenteditable': null, 'contextmenu'     : null, 'controls'             : null, 'coords'                : null, 'crossorigin'     : null, 'data'            : null, 'data*'        : null, 'datetime'  : null, 'default'   : null, 'defer'           : null, 'dir'             : null, 'dirname'        : null, 'disabled'        : null, 'download'       : null, 'draggable': null, 'dropzone'      : null, 'enctype'       : null, 'for'           : null, 'form'       : null, 'formaction': null, 'headers'        : null, 'height'         : null, 'hidden'         : null, 'high'        : null, 'href'      : null, 'hreflang': null, 'httpEquiv'    : null, 'icon'              : null, 'id'                 : null, 'integrity'    : null, 'ismap'        : null, 'itemprop'  : null, 'keytype': null, 'kind'             : null, 'label'   : null, 'lang'    : null, 'language' : null, 'list'      : null, 'loop'      : null, 'low'       : null, 'manifest' : null, 'max'    : null, 'maxlength': null, 'minlength': null, 'media': null, 'method'    : null, 'min'      : null, 'multiple': null, 'muted'    : null, 'name'          : null, 'novalidate'    : null, 'open'          : null, 'optimum'  : null, 'pattern'   : null, 'ping'  : null, 'placeholder': null, 'poster'         : null, 'preload'    : null, 'radiogroup': null, 'readonly': null, 'rel'   : null, 'required' : null, 'reversed': null, 'rows': null, 'rowspan' : null, 'sandbox'     : null, 'scope'  : null, 'scoped' : null, 'seamless' : null, 'selected': null, 'shape': null, 'size': null, 'sizes'   : null, 'slot'     : null, 'span'              : null, 'spellcheck'       : null, 'src'       : null, 'srcdoc'             : null, 'srclang': null, 'srcset'       : null, 'start'     : null, 'step'    : null, 'style'       : null, 'summary'   : null, 'tabindex'            : null, 'target'        : null, 'title'              : null, 'translate'          : null, 'type'             : null, 'usemap'            : null, 'value'    : null, 'width': null, 'wrap'   : null }
const css_overlap           = {"border"      : null, "color"        : null, "content"  : null, "height": null, "width"   : null}
const html_tag_with_overlap = {  img         : null, canvas         : null, embed      : null, iframe  : null, input     : null, object         : null, video              : null, meta              : null, basefont          : null, font                    : null, hr            : null, img                : null, object                  : null, table              : null } 
var log = console.log
var classof = Function.prototype.call.bind(Object.prototype.toString)
function SetStyle(element,style_obj=null) 
    {
        if (style_obj != null && typeof style_obj == "object")
            {
                for (var each_key of Object.keys(style_obj))
                    {
                        element.style[each_key] = style_obj[each_key]
                    }
            }
    }
function New(element_name,attributes={}) 
    {
        var default_attributes = {}
        if (element_name=="Button")
            {
                var output_ = document.createElement(element_name)
                output_.className = "waves-effect waves-light btn"
            }
        else if (element_name == "Card")
            {
                var output_ = document.createElement("div")
                output_.className = "card-panel"
            }
        else if (element_name == "Input")
            {
                var output_ = document.createElement("input")
                default_attributes = { style:{ fontSize:"15pt", margin:"15px",  height:"2rem"}}
            }
        else
            {
                var output_ = document.createElement(element_name)
            }
        // override the default_attributes with attributes
        for (var each_attribute of Object.keys(attributes))
            {
                default_attributes[each_attribute] = attributes[each_attribute]
            }
        attributes = default_attributes
        // before returning, set the attributes
        for (var each_key of Object.keys(attributes))
            {
                // check for css/html overlap
                if  (
                        !(each_key in html_attributes)  // if its not an html attribute 
                        || // or 
                            (each_key in css_overlap) // it overlaps with css 
                            &&  // and 
                            (!(each_key in html_tag_with_overlap)) // it isn't one of the elements with the overlap
                    )
                    // then
                    {
                        // then try it as a css property
                        output_.style[each_key] = attributes[each_key]
                    }
                if (typeof attributes[each_key] == "object" && attributes[each_key] != null )
                    {
                        output_[each_key] = {}
                        for (var each_sub_key of Object.keys(attributes[each_key]))
                            {
                                output_[each_key][each_sub_key] = attributes[each_key][each_sub_key]
                            }
                    }
                else
                    {
                        if (each_key == "class")
                            {
                                output_.className = attributes.class
                            }
                        else
                            {
                                output_[each_key] = attributes[each_key]
                            }
                    }
            }
        
        return output_
    }
function GetByXpath(path) 
    {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
function HorizonallyCenterChildrenOf(element)
    {
        element.style.display = "flex"
        element.style.justifyContent = "center"
        return element
    }
function VerticallyCenterChildrenOf(element)
    {
        element.style.display = "flex"
        element.style.alignItems = "center"
        return element
    }
function TimerFor(time_amount)
    {
        return new Promise(resolve => 
            {
                setTimeout(()=>{ resolve(null) }, time_amount)
            })
    }
class SimpleElement
    {
        constructor(styles,element) 
            { 
                this.__MainNode = element 
                SetStyle(this.__MainNode,styles)
            }
        add(element)
            {
                console.log(`calling SimpleElement add element=`,element)
                if (element instanceof SimpleElement)
                    {
                        this.__MainNode.add(element.__MainNode)
                    }
                else  
                    {
                        this.__MainNode.add(element)
                    }
                return this
            }
        delete()
            {
                this.__MainNode.delete()
            }
        get innerHTML() { return this.__MainNode.innerHTML } set innerHTML(value) { this.__MainNode.innerHTML = value }
        get asElem() { return this.__MainNode }
        // html properties
            get accept()                 { return this.__MainNode.accept             } set accept                   (value) { this.__MainNode.accept          = value }
            get acceptCharset()          { return this.__MainNode.acceptCharset      } set acceptCharset            (value) { this.__MainNode.acceptCharset   = value }
            get accesskey()              { return this.__MainNode.accesskey          } set accesskey                (value) { this.__MainNode.accesskey       = value }
            get action()                 { return this.__MainNode.action             } set action                   (value) { this.__MainNode.action          = value }
            get align()                  { return this.__MainNode.align              } set align                    (value) { this.__MainNode.align           = value }
            get alt()                    { return this.__MainNode.alt                } set alt                      (value) { this.__MainNode.alt             = value }
            get async()                  { return this.__MainNode.async              } set async                    (value) { this.__MainNode.async           = value }
            get autocapitalize()         { return this.__MainNode.autocapitalize     } set autocapitalize           (value) { this.__MainNode.autocapitalize  = value }
            get autocomplete()           { return this.__MainNode.autocomplete       } set autocomplete             (value) { this.__MainNode.autocomplete    = value }
            get autofocus()              { return this.__MainNode.autofocus          } set autofocus                (value) { this.__MainNode.autofocus       = value }
            get autoplay()               { return this.__MainNode.autoplay           } set autoplay                 (value) { this.__MainNode.autoplay        = value }
            get bgcolor()                { return this.__MainNode.bgcolor            } set bgcolor                  (value) { this.__MainNode.bgcolor         = value }
            get buffered()               { return this.__MainNode.buffered           } set buffered                 (value) { this.__MainNode.buffered        = value }
            get challenge()              { return this.__MainNode.challenge          } set challenge                (value) { this.__MainNode.challenge       = value }
            get charset()                { return this.__MainNode.charset            } set charset                  (value) { this.__MainNode.charset         = value }
            get checked()                { return this.__MainNode.checked            } set checked                  (value) { this.__MainNode.checked         = value }
            get cite()                   { return this.__MainNode.cite               } set cite                     (value) { this.__MainNode.cite            = value }
            get class()                  { return this.__MainNode.class              } set class                    (value) { this.__MainNode.class           = value }
            get code()                   { return this.__MainNode.code               } set code                     (value) { this.__MainNode.code            = value }
            get codebase()               { return this.__MainNode.codebase           } set codebase                 (value) { this.__MainNode.codebase        = value }
            get cols()                   { return this.__MainNode.cols               } set cols                     (value) { this.__MainNode.cols            = value }
            get colspan()                { return this.__MainNode.colspan            } set colspan                  (value) { this.__MainNode.colspan         = value }
            get contenteditable()        { return this.__MainNode.contenteditable    } set contenteditable          (value) { this.__MainNode.contenteditable = value }
            get contextmenu()            { return this.__MainNode.contextmenu        } set contextmenu              (value) { this.__MainNode.contextmenu     = value }
            get controls()               { return this.__MainNode.controls           } set controls                 (value) { this.__MainNode.controls        = value }
            get coords()                 { return this.__MainNode.coords             } set coords                   (value) { this.__MainNode.coords          = value }
            get crossorigin()            { return this.__MainNode.crossorigin        } set crossorigin              (value) { this.__MainNode.crossorigin     = value }
            get data()                   { return this.__MainNode.data               } set data                     (value) { this.__MainNode.data            = value }
            get data()                   { return this.__MainNode.data               } set data                     (value) { this.__MainNode.data            = value }
            get datetime()               { return this.__MainNode.datetime           } set datetime                 (value) { this.__MainNode.datetime        = value }
            get default()                { return this.__MainNode.default            } set default                  (value) { this.__MainNode.default         = value }
            get defer()                  { return this.__MainNode.defer              } set defer                    (value) { this.__MainNode.defer           = value }
            get dir()                    { return this.__MainNode.dir                } set dir                      (value) { this.__MainNode.dir             = value }
            get dirname()                { return this.__MainNode.dirname            } set dirname                  (value) { this.__MainNode.dirname         = value }
            get disabled()               { return this.__MainNode.disabled           } set disabled                 (value) { this.__MainNode.disabled        = value }
            get download()               { return this.__MainNode.download           } set download                 (value) { this.__MainNode.download        = value }
            get draggable()              { return this.__MainNode.draggable          } set draggable                (value) { this.__MainNode.draggable       = value }
            get dropzone()               { return this.__MainNode.dropzone           } set dropzone                 (value) { this.__MainNode.dropzone        = value }
            get enctype()                { return this.__MainNode.enctype            } set enctype                  (value) { this.__MainNode.enctype         = value }
            get for()                    { return this.__MainNode.for                } set for                      (value) { this.__MainNode.for             = value }
            get form()                   { return this.__MainNode.form               } set form                     (value) { this.__MainNode.form            = value }
            get formaction()             { return this.__MainNode.formaction         } set formaction               (value) { this.__MainNode.formaction      = value }
            get headers()                { return this.__MainNode.headers            } set headers                  (value) { this.__MainNode.headers         = value }
            get hidden()                 { return this.__MainNode.hidden             } set hidden                   (value) { this.__MainNode.hidden          = value }
            get high()                   { return this.__MainNode.high               } set high                     (value) { this.__MainNode.high            = value }
            get href()                   { return this.__MainNode.href               } set href                     (value) { this.__MainNode.href            = value }
            get hreflang()               { return this.__MainNode.hreflang           } set hreflang                 (value) { this.__MainNode.hreflang        = value }
            get httpEquiv()              { return this.__MainNode.httpEquiv          } set httpEquiv                (value) { this.__MainNode.httpEquiv       = value }
            get icon()                   { return this.__MainNode.icon               } set icon                     (value) { this.__MainNode.icon            = value }
            get id()                     { return this.__MainNode.id                 } set id                       (value) { this.__MainNode.id              = value }
            get integrity()              { return this.__MainNode.integrity          } set integrity                (value) { this.__MainNode.integrity       = value }
            get ismap()                  { return this.__MainNode.ismap              } set ismap                    (value) { this.__MainNode.ismap           = value }
            get itemprop()               { return this.__MainNode.itemprop           } set itemprop                 (value) { this.__MainNode.itemprop        = value }
            get keytype()                { return this.__MainNode.keytype            } set keytype                  (value) { this.__MainNode.keytype         = value }
            get kind()                   { return this.__MainNode.kind               } set kind                     (value) { this.__MainNode.kind            = value }
            get label()                  { return this.__MainNode.label              } set label                    (value) { this.__MainNode.label           = value }
            get lang()                   { return this.__MainNode.lang               } set lang                     (value) { this.__MainNode.lang            = value }
            get language()               { return this.__MainNode.language           } set language                 (value) { this.__MainNode.language        = value }
            get list()                   { return this.__MainNode.list               } set list                     (value) { this.__MainNode.list            = value }
            get loop()                   { return this.__MainNode.loop               } set loop                     (value) { this.__MainNode.loop            = value }
            get low()                    { return this.__MainNode.low                } set low                      (value) { this.__MainNode.low             = value }
            get manifest()               { return this.__MainNode.manifest           } set manifest                 (value) { this.__MainNode.manifest        = value }
            get max()                    { return this.__MainNode.max                } set max                      (value) { this.__MainNode.max             = value }
            get maxlength()              { return this.__MainNode.maxlength          } set maxlength                (value) { this.__MainNode.maxlength       = value }
            get minlength()              { return this.__MainNode.minlength          } set minlength                (value) { this.__MainNode.minlength       = value }
            get media()                  { return this.__MainNode.media              } set media                    (value) { this.__MainNode.media           = value }
            get method()                 { return this.__MainNode.method             } set method                   (value) { this.__MainNode.method          = value }
            get min()                    { return this.__MainNode.min                } set min                      (value) { this.__MainNode.min             = value }
            get multiple()               { return this.__MainNode.multiple           } set multiple                 (value) { this.__MainNode.multiple        = value }
            get muted()                  { return this.__MainNode.muted              } set muted                    (value) { this.__MainNode.muted           = value }
            get name()                   { return this.__MainNode.name               } set name                     (value) { this.__MainNode.name            = value }
            get novalidate()             { return this.__MainNode.novalidate         } set novalidate               (value) { this.__MainNode.novalidate      = value }
            get open()                   { return this.__MainNode.open               } set open                     (value) { this.__MainNode.open            = value }
            get optimum()                { return this.__MainNode.optimum            } set optimum                  (value) { this.__MainNode.optimum         = value }
            get pattern()                { return this.__MainNode.pattern            } set pattern                  (value) { this.__MainNode.pattern         = value }
            get ping()                   { return this.__MainNode.ping               } set ping                     (value) { this.__MainNode.ping            = value }
            get placeholder()            { return this.__MainNode.placeholder        } set placeholder              (value) { this.__MainNode.placeholder     = value }
            get poster()                 { return this.__MainNode.poster             } set poster                   (value) { this.__MainNode.poster          = value }
            get preload()                { return this.__MainNode.preload            } set preload                  (value) { this.__MainNode.preload         = value }
            get radiogroup()             { return this.__MainNode.radiogroup         } set radiogroup               (value) { this.__MainNode.radiogroup      = value }
            get readonly()               { return this.__MainNode.readonly           } set readonly                 (value) { this.__MainNode.readonly        = value }
            get rel()                    { return this.__MainNode.rel                } set rel                      (value) { this.__MainNode.rel             = value }
            get required()               { return this.__MainNode.required           } set required                 (value) { this.__MainNode.required        = value }
            get reversed()               { return this.__MainNode.reversed           } set reversed                 (value) { this.__MainNode.reversed        = value }
            get rows()                   { return this.__MainNode.rows               } set rows                     (value) { this.__MainNode.rows            = value }
            get rowspan()                { return this.__MainNode.rowspan            } set rowspan                  (value) { this.__MainNode.rowspan         = value }
            get sandbox()                { return this.__MainNode.sandbox            } set sandbox                  (value) { this.__MainNode.sandbox         = value }
            get scope()                  { return this.__MainNode.scope              } set scope                    (value) { this.__MainNode.scope           = value }
            get scoped()                 { return this.__MainNode.scoped             } set scoped                   (value) { this.__MainNode.scoped          = value }
            get seamless()               { return this.__MainNode.seamless           } set seamless                 (value) { this.__MainNode.seamless        = value }
            get selected()               { return this.__MainNode.selected           } set selected                 (value) { this.__MainNode.selected        = value }
            get shape()                  { return this.__MainNode.shape              } set shape                    (value) { this.__MainNode.shape           = value }
            get size()                   { return this.__MainNode.size               } set size                     (value) { this.__MainNode.size            = value }
            get sizes()                  { return this.__MainNode.sizes              } set sizes                    (value) { this.__MainNode.sizes           = value }
            get slot()                   { return this.__MainNode.slot               } set slot                     (value) { this.__MainNode.slot            = value }
            get span()                   { return this.__MainNode.span               } set span                     (value) { this.__MainNode.span            = value }
            get spellcheck()             { return this.__MainNode.spellcheck         } set spellcheck               (value) { this.__MainNode.spellcheck      = value }
            get src()                    { return this.__MainNode.src                } set src                      (value) { this.__MainNode.src             = value }
            get srcdoc()                 { return this.__MainNode.srcdoc             } set srcdoc                   (value) { this.__MainNode.srcdoc          = value }
            get srclang()                { return this.__MainNode.srclang            } set srclang                  (value) { this.__MainNode.srclang         = value }
            get srcset()                 { return this.__MainNode.srcset             } set srcset                   (value) { this.__MainNode.srcset          = value }
            get start()                  { return this.__MainNode.start              } set start                    (value) { this.__MainNode.start           = value }
            get step()                   { return this.__MainNode.step               } set step                     (value) { this.__MainNode.step            = value }
            get style()                  { return this.__MainNode.style              } set style                    (value) { this.__MainNode.style           = value }
            get summary()                { return this.__MainNode.summary            } set summary                  (value) { this.__MainNode.summary         = value }
            get tabindex()               { return this.__MainNode.tabindex           } set tabindex                 (value) { this.__MainNode.tabindex        = value }
            get target()                 { return this.__MainNode.target             } set target                   (value) { this.__MainNode.target          = value }
            get title()                  { return this.__MainNode.title              } set title                    (value) { this.__MainNode.title           = value }
            get translate()              { return this.__MainNode.translate          } set translate                (value) { this.__MainNode.translate       = value }
            get type()                   { return this.__MainNode.type               } set type                     (value) { this.__MainNode.type            = value }
            get usemap()                 { return this.__MainNode.usemap             } set usemap                   (value) { this.__MainNode.usemap          = value }
            get value()                  { return this.__MainNode.value              } set value                    (value) { this.__MainNode.value           = value }
            get wrap()                   { return this.__MainNode.wrap               } set wrap                     (value) { this.__MainNode.wrap            = value }
        // html events
            get onchange()                { return this.__MainNode.onchange                } set onchange                 (value){ this.__MainNode.onchange                = value }
            get onclick()                 { return this.__MainNode.onclick                 } set onclick                  (value){ this.__MainNode.onclick                 = value }
            get onmouseover()             { return this.__MainNode.onmouseover             } set onmouseover              (value){ this.__MainNode.onmouseover             = value }
            get onmouseout()              { return this.__MainNode.onmouseout              } set onmouseout               (value){ this.__MainNode.onmouseout              = value }
            get onkeydown()               { return this.__MainNode.onkeydown               } set onkeydown                (value){ this.__MainNode.onkeydown               = value }
            get onload()                  { return this.__MainNode.onload                  } set onload                   (value){ this.__MainNode.onload                  = value }
            get abort()                   { return this.__MainNode.abort                   }  set abort                   (value){ this.__MainNode.abort                   = value } 
            get afterprint()              { return this.__MainNode.afterprint              }  set afterprint              (value){ this.__MainNode.afterprint              = value } 
            get animationend()            { return this.__MainNode.animationend            }  set animationend            (value){ this.__MainNode.animationend            = value } 
            get animationiteration()      { return this.__MainNode.animationiteration      }  set animationiteration      (value){ this.__MainNode.animationiteration      = value } 
            get animationstart()          { return this.__MainNode.animationstart          }  set animationstart          (value){ this.__MainNode.animationstart          = value } 
            get beforeprint()             { return this.__MainNode.beforeprint             }  set beforeprint             (value){ this.__MainNode.beforeprint             = value } 
            get beforeunload()            { return this.__MainNode.beforeunload            }  set beforeunload            (value){ this.__MainNode.beforeunload            = value } 
            get blur()                    { return this.__MainNode.blur                    }  set blur                    (value){ this.__MainNode.blur                    = value } 
            get canplay()                 { return this.__MainNode.canplay                 }  set canplay                 (value){ this.__MainNode.canplay                 = value } 
            get canplaythrough()          { return this.__MainNode.canplaythrough          }  set canplaythrough          (value){ this.__MainNode.canplaythrough          = value } 
            get change()                  { return this.__MainNode.change                  }  set change                  (value){ this.__MainNode.change                  = value } 
            get click()                   { return this.__MainNode.click                   }  set click                   (value){ this.__MainNode.click                   = value } 
            get contextmenu()             { return this.__MainNode.contextmenu             }  set contextmenu             (value){ this.__MainNode.contextmenu             = value } 
            get copy()                    { return this.__MainNode.copy                    }  set copy                    (value){ this.__MainNode.copy                    = value } 
            get cut()                     { return this.__MainNode.cut                     }  set cut                     (value){ this.__MainNode.cut                     = value } 
            get dblclick()                { return this.__MainNode.dblclick                }  set dblclick                (value){ this.__MainNode.dblclick                = value } 
            get drag()                    { return this.__MainNode.drag                    }  set drag                    (value){ this.__MainNode.drag                    = value } 
            get dragend()                 { return this.__MainNode.dragend                 }  set dragend                 (value){ this.__MainNode.dragend                 = value } 
            get dragenter()               { return this.__MainNode.dragenter               }  set dragenter               (value){ this.__MainNode.dragenter               = value } 
            get dragleave()               { return this.__MainNode.dragleave               }  set dragleave               (value){ this.__MainNode.dragleave               = value } 
            get dragover()                { return this.__MainNode.dragover                }  set dragover                (value){ this.__MainNode.dragover                = value } 
            get dragstart()               { return this.__MainNode.dragstart               }  set dragstart               (value){ this.__MainNode.dragstart               = value } 
            get drop()                    { return this.__MainNode.drop                    }  set drop                    (value){ this.__MainNode.drop                    = value } 
            get durationchange()          { return this.__MainNode.durationchange          }  set durationchange          (value){ this.__MainNode.durationchange          = value } 
            get ended()                   { return this.__MainNode.ended                   }  set ended                   (value){ this.__MainNode.ended                   = value } 
            get error()                   { return this.__MainNode.error                   }  set error                   (value){ this.__MainNode.error                   = value } 
            get focus()                   { return this.__MainNode.focus                   }  set focus                   (value){ this.__MainNode.focus                   = value } 
            get focusin()                 { return this.__MainNode.focusin                 }  set focusin                 (value){ this.__MainNode.focusin                 = value } 
            get focusout()                { return this.__MainNode.focusout                }  set focusout                (value){ this.__MainNode.focusout                = value } 
            get hashchange()              { return this.__MainNode.hashchange              }  set hashchange              (value){ this.__MainNode.hashchange              = value } 
            get input()                   { return this.__MainNode.input                   }  set input                   (value){ this.__MainNode.input                   = value } 
            get invalid()                 { return this.__MainNode.invalid                 }  set invalid                 (value){ this.__MainNode.invalid                 = value } 
            get keydown()                 { return this.__MainNode.keydown                 }  set keydown                 (value){ this.__MainNode.keydown                 = value } 
            get keypress()                { return this.__MainNode.keypress                }  set keypress                (value){ this.__MainNode.keypress                = value } 
            get keyup()                   { return this.__MainNode.keyup                   }  set keyup                   (value){ this.__MainNode.keyup                   = value } 
            get load()                    { return this.__MainNode.load                    }  set load                    (value){ this.__MainNode.load                    = value } 
            get loadeddata()              { return this.__MainNode.loadeddata              }  set loadeddata              (value){ this.__MainNode.loadeddata              = value } 
            get loadedmetadata()          { return this.__MainNode.loadedmetadata          }  set loadedmetadata          (value){ this.__MainNode.loadedmetadata          = value } 
            get loadstart()               { return this.__MainNode.loadstart               }  set loadstart               (value){ this.__MainNode.loadstart               = value } 
            get message()                 { return this.__MainNode.message                 }  set message                 (value){ this.__MainNode.message                 = value } 
            get mousedown()               { return this.__MainNode.mousedown               }  set mousedown               (value){ this.__MainNode.mousedown               = value } 
            get mouseenter()              { return this.__MainNode.mouseenter              }  set mouseenter              (value){ this.__MainNode.mouseenter              = value } 
            get mouseleave()              { return this.__MainNode.mouseleave              }  set mouseleave              (value){ this.__MainNode.mouseleave              = value } 
            get mousemove()               { return this.__MainNode.mousemove               }  set mousemove               (value){ this.__MainNode.mousemove               = value } 
            get mouseover()               { return this.__MainNode.mouseover               }  set mouseover               (value){ this.__MainNode.mouseover               = value } 
            get mouseout()                { return this.__MainNode.mouseout                }  set mouseout                (value){ this.__MainNode.mouseout                = value } 
            get mouseup()                 { return this.__MainNode.mouseup                 }  set mouseup                 (value){ this.__MainNode.mouseup                 = value } 
            get mousewheel()              { return this.__MainNode.mousewheel              }  set mousewheel              (value){ this.__MainNode.mousewheel              = value } 
            get offline()                 { return this.__MainNode.offline                 }  set offline                 (value){ this.__MainNode.offline                 = value } 
            get online()                  { return this.__MainNode.online                  }  set online                  (value){ this.__MainNode.online                  = value } 
            get open()                    { return this.__MainNode.open                    }  set open                    (value){ this.__MainNode.open                    = value } 
            get pagehide()                { return this.__MainNode.pagehide                }  set pagehide                (value){ this.__MainNode.pagehide                = value } 
            get pageshow()                { return this.__MainNode.pageshow                }  set pageshow                (value){ this.__MainNode.pageshow                = value } 
            get paste()                   { return this.__MainNode.paste                   }  set paste                   (value){ this.__MainNode.paste                   = value } 
            get pause()                   { return this.__MainNode.pause                   }  set pause                   (value){ this.__MainNode.pause                   = value } 
            get play()                    { return this.__MainNode.play                    }  set play                    (value){ this.__MainNode.play                    = value } 
            get playing()                 { return this.__MainNode.playing                 }  set playing                 (value){ this.__MainNode.playing                 = value } 
            get popstate()                { return this.__MainNode.popstate                }  set popstate                (value){ this.__MainNode.popstate                = value } 
            get progress()                { return this.__MainNode.progress                }  set progress                (value){ this.__MainNode.progress                = value } 
            get ratechange()              { return this.__MainNode.ratechange              }  set ratechange              (value){ this.__MainNode.ratechange              = value } 
            get resize()                  { return this.__MainNode.resize                  }  set resize                  (value){ this.__MainNode.resize                  = value } 
            get reset()                   { return this.__MainNode.reset                   }  set reset                   (value){ this.__MainNode.reset                   = value } 
            get scroll()                  { return this.__MainNode.scroll                  }  set scroll                  (value){ this.__MainNode.scroll                  = value } 
            get search()                  { return this.__MainNode.search                  }  set search                  (value){ this.__MainNode.search                  = value } 
            get seeked()                  { return this.__MainNode.seeked                  }  set seeked                  (value){ this.__MainNode.seeked                  = value } 
            get seeking()                 { return this.__MainNode.seeking                 }  set seeking                 (value){ this.__MainNode.seeking                 = value } 
            get select()                  { return this.__MainNode.select                  }  set select                  (value){ this.__MainNode.select                  = value } 
            get show()                    { return this.__MainNode.show                    }  set show                    (value){ this.__MainNode.show                    = value } 
            get stalled()                 { return this.__MainNode.stalled                 }  set stalled                 (value){ this.__MainNode.stalled                 = value } 
            get storage()                 { return this.__MainNode.storage                 }  set storage                 (value){ this.__MainNode.storage                 = value } 
            get submit()                  { return this.__MainNode.submit                  }  set submit                  (value){ this.__MainNode.submit                  = value } 
            get suspend()                 { return this.__MainNode.suspend                 }  set suspend                 (value){ this.__MainNode.suspend                 = value } 
            get timeupdate()              { return this.__MainNode.timeupdate              }  set timeupdate              (value){ this.__MainNode.timeupdate              = value } 
            get toggle()                  { return this.__MainNode.toggle                  }  set toggle                  (value){ this.__MainNode.toggle                  = value } 
            get touchcancel()             { return this.__MainNode.touchcancel             }  set touchcancel             (value){ this.__MainNode.touchcancel             = value } 
            get touchend()                { return this.__MainNode.touchend                }  set touchend                (value){ this.__MainNode.touchend                = value } 
            get touchmove()               { return this.__MainNode.touchmove               }  set touchmove               (value){ this.__MainNode.touchmove               = value } 
            get touchstart()              { return this.__MainNode.touchstart              }  set touchstart              (value){ this.__MainNode.touchstart              = value } 
            get transitionend()           { return this.__MainNode.transitionend           }  set transitionend           (value){ this.__MainNode.transitionend           = value } 
            get unload()                  { return this.__MainNode.unload                  }  set unload                  (value){ this.__MainNode.unload                  = value } 
            get volumechange()            { return this.__MainNode.volumechange            }  set volumechange            (value){ this.__MainNode.volumechange            = value } 
            get waiting()                 { return this.__MainNode.waiting                 }  set waiting                 (value){ this.__MainNode.waiting                 = value } 
            get wheel()                   { return this.__MainNode.wheel                   }  set wheel                   (value){ this.__MainNode.wheel                   = value } 
            get altKey()                  { return this.__MainNode.altKey                  }  set altKey                  (value){ this.__MainNode.altKey                  = value } 
            get altKey()                  { return this.__MainNode.altKey                  }  set altKey                  (value){ this.__MainNode.altKey                  = value } 
            get animationName()           { return this.__MainNode.animationName           }  set animationName           (value){ this.__MainNode.animationName           = value } 
            get bubbles()                 { return this.__MainNode.bubbles                 }  set bubbles                 (value){ this.__MainNode.bubbles                 = value } 
            get button()                  { return this.__MainNode.button                  }  set button                  (value){ this.__MainNode.button                  = value } 
            get buttons()                 { return this.__MainNode.buttons                 }  set buttons                 (value){ this.__MainNode.buttons                 = value } 
            get cancelable()              { return this.__MainNode.cancelable              }  set cancelable              (value){ this.__MainNode.cancelable              = value } 
            get charCode()                { return this.__MainNode.charCode                }  set charCode                (value){ this.__MainNode.charCode                = value } 
            get changeTouches()           { return this.__MainNode.changeTouches           }  set changeTouches           (value){ this.__MainNode.changeTouches           = value } 
            get clientX()                 { return this.__MainNode.clientX                 }  set clientX                 (value){ this.__MainNode.clientX                 = value } 
            get clientY()                 { return this.__MainNode.clientY                 }  set clientY                 (value){ this.__MainNode.clientY                 = value } 
            get clipboardData()           { return this.__MainNode.clipboardData           }  set clipboardData           (value){ this.__MainNode.clipboardData           = value } 
            get code()                    { return this.__MainNode.code                    }  set code                    (value){ this.__MainNode.code                    = value } 
            get composed()                { return this.__MainNode.composed                }  set composed                (value){ this.__MainNode.composed                = value } 
            get ctrlKey()                 { return this.__MainNode.ctrlKey                 }  set ctrlKey                 (value){ this.__MainNode.ctrlKey                 = value } 
            get ctrlKey()                 { return this.__MainNode.ctrlKey                 }  set ctrlKey                 (value){ this.__MainNode.ctrlKey                 = value } 
            get currentTarget()           { return this.__MainNode.currentTarget           }  set currentTarget           (value){ this.__MainNode.currentTarget           = value } 
            get data()                    { return this.__MainNode.data                    }  set data                    (value){ this.__MainNode.data                    = value } 
            get dataTransfer()            { return this.__MainNode.dataTransfer            }  set dataTransfer            (value){ this.__MainNode.dataTransfer            = value } 
            get defaultPrevented()        { return this.__MainNode.defaultPrevented        }  set defaultPrevented        (value){ this.__MainNode.defaultPrevented        = value } 
            get deltaX()                  { return this.__MainNode.deltaX                  }  set deltaX                  (value){ this.__MainNode.deltaX                  = value } 
            get deltaY()                  { return this.__MainNode.deltaY                  }  set deltaY                  (value){ this.__MainNode.deltaY                  = value } 
            get deltaZ()                  { return this.__MainNode.deltaZ                  }  set deltaZ                  (value){ this.__MainNode.deltaZ                  = value } 
            get deltaMode()               { return this.__MainNode.deltaMode               }  set deltaMode               (value){ this.__MainNode.deltaMode               = value } 
            get detail()                  { return this.__MainNode.detail                  }  set detail                  (value){ this.__MainNode.detail                  = value } 
            get elapsedTime()             { return this.__MainNode.elapsedTime             }  set elapsedTime             (value){ this.__MainNode.elapsedTime             = value } 
            get elapsedTime()             { return this.__MainNode.elapsedTime             }  set elapsedTime             (value){ this.__MainNode.elapsedTime             = value } 
            get eventPhase()              { return this.__MainNode.eventPhase              }  set eventPhase              (value){ this.__MainNode.eventPhase              = value } 
            get isComposing()             { return this.__MainNode.isComposing             }  set isComposing             (value){ this.__MainNode.isComposing             = value } 
            get isTrusted()               { return this.__MainNode.isTrusted               }  set isTrusted               (value){ this.__MainNode.isTrusted               = value } 
            get key()                     { return this.__MainNode.key                     }  set key                     (value){ this.__MainNode.key                     = value } 
            get key()                     { return this.__MainNode.key                     }  set key                     (value){ this.__MainNode.key                     = value } 
            get keyCode()                 { return this.__MainNode.keyCode                 }  set keyCode                 (value){ this.__MainNode.keyCode                 = value } 
            get location()                { return this.__MainNode.location                }  set location                (value){ this.__MainNode.location                = value } 
            get lengthComputable()        { return this.__MainNode.lengthComputable        }  set lengthComputable        (value){ this.__MainNode.lengthComputable        = value } 
            get loaded()                  { return this.__MainNode.loaded                  }  set loaded                  (value){ this.__MainNode.loaded                  = value } 
            get metaKey()                 { return this.__MainNode.metaKey                 }  set metaKey                 (value){ this.__MainNode.metaKey                 = value } 
            get metaKey()                 { return this.__MainNode.metaKey                 }  set metaKey                 (value){ this.__MainNode.metaKey                 = value } 
            get MovementX()               { return this.__MainNode.MovementX               }  set MovementX               (value){ this.__MainNode.MovementX               = value } 
            get MovementY()               { return this.__MainNode.MovementY               }  set MovementY               (value){ this.__MainNode.MovementY               = value } 
            get newValue()                { return this.__MainNode.newValue                }  set newValue                (value){ this.__MainNode.newValue                = value } 
            get newURL()                  { return this.__MainNode.newURL                  }  set newURL                  (value){ this.__MainNode.newURL                  = value } 
            get offsetX()                 { return this.__MainNode.offsetX                 }  set offsetX                 (value){ this.__MainNode.offsetX                 = value } 
            get offsetY()                 { return this.__MainNode.offsetY                 }  set offsetY                 (value){ this.__MainNode.offsetY                 = value } 
            get oldValue()                { return this.__MainNode.oldValue                }  set oldValue                (value){ this.__MainNode.oldValue                = value } 
            get oldURL()                  { return this.__MainNode.oldURL                  }  set oldURL                  (value){ this.__MainNode.oldURL                  = value } 
            get onemptied()               { return this.__MainNode.onemptied               }  set onemptied               (value){ this.__MainNode.onemptied               = value } 
            get pageX()                   { return this.__MainNode.pageX                   }  set pageX                   (value){ this.__MainNode.pageX                   = value } 
            get pageY()                   { return this.__MainNode.pageY                   }  set pageY                   (value){ this.__MainNode.pageY                   = value } 
            get persisted()               { return this.__MainNode.persisted               }  set persisted               (value){ this.__MainNode.persisted               = value } 
            get propertyName()            { return this.__MainNode.propertyName            }  set propertyName            (value){ this.__MainNode.propertyName            = value } 
            get pseudoElement()           { return this.__MainNode.pseudoElement           }  set pseudoElement           (value){ this.__MainNode.pseudoElement           = value } 
            get region()                  { return this.__MainNode.region                  }  set region                  (value){ this.__MainNode.region                  = value } 
            get relatedTarget()           { return this.__MainNode.relatedTarget           }  set relatedTarget           (value){ this.__MainNode.relatedTarget           = value } 
            get relatedTarget()           { return this.__MainNode.relatedTarget           }  set relatedTarget           (value){ this.__MainNode.relatedTarget           = value } 
            get repeat()                  { return this.__MainNode.repeat                  }  set repeat                  (value){ this.__MainNode.repeat                  = value } 
            get screenX()                 { return this.__MainNode.screenX                 }  set screenX                 (value){ this.__MainNode.screenX                 = value } 
            get screenY()                 { return this.__MainNode.screenY                 }  set screenY                 (value){ this.__MainNode.screenY                 = value } 
            get shiftKey()                { return this.__MainNode.shiftKey                }  set shiftKey                (value){ this.__MainNode.shiftKey                = value } 
            get shiftKey()                { return this.__MainNode.shiftKey                }  set shiftKey                (value){ this.__MainNode.shiftKey                = value } 
            get state()                   { return this.__MainNode.state                   }  set state                   (value){ this.__MainNode.state                   = value } 
            get storageArea()             { return this.__MainNode.storageArea             }  set storageArea             (value){ this.__MainNode.storageArea             = value } 
            get target()                  { return this.__MainNode.target                  }  set target                  (value){ this.__MainNode.target                  = value } 
            get targetTouches()           { return this.__MainNode.targetTouches           }  set targetTouches           (value){ this.__MainNode.targetTouches           = value } 
            get timeStamp()               { return this.__MainNode.timeStamp               }  set timeStamp               (value){ this.__MainNode.timeStamp               = value } 
            get total()                   { return this.__MainNode.total                   }  set total                   (value){ this.__MainNode.total                   = value } 
            get touches()                 { return this.__MainNode.touches                 }  set touches                 (value){ this.__MainNode.touches                 = value } 
            get transitionend()           { return this.__MainNode.transitionend           }  set transitionend           (value){ this.__MainNode.transitionend           = value } 
            get type()                    { return this.__MainNode.type                    }  set type                    (value){ this.__MainNode.type                    = value } 
            get url()                     { return this.__MainNode.url                     }  set url                     (value){ this.__MainNode.url                     = value } 
            get which()                   { return this.__MainNode.which                   }  set which                   (value){ this.__MainNode.which                   = value } 
            get which()                   { return this.__MainNode.which                   }  set which                   (value){ this.__MainNode.which                   = value } 
            get view()                    { return this.__MainNode.view                    }  set view                    (value){ this.__MainNode.view                    = value } 
        // html event related functions
            createEvent              (...inputs) { return this.__MainNode.createEvent              (...inputs) }
            getTargetRanges          (...inputs) { return this.__MainNode.getTargetRanges          (...inputs) }
            getModifierState         (...inputs) { return this.__MainNode.getModifierState         (...inputs) }
            inputType                (...inputs) { return this.__MainNode.inputType                (...inputs) }
            preventDefault           (...inputs) { return this.__MainNode.preventDefault           (...inputs) }
            stopImmediatePropagation (...inputs) { return this.__MainNode.stopImmediatePropagation (...inputs) }
            stopPropagation          (...inputs) { return this.__MainNode.stopPropagation          (...inputs) }
        // css properties
            get alignContent                    () { return this.__MainNode.style.alignContent                     } set alignContent                    (value) { this.__MainNode.style.alignContent                    = value }
            get alignItems                      () { return this.__MainNode.style.alignItems                       } set alignItems                      (value) { this.__MainNode.style.alignItems                      = value }
            get alignSelf                       () { return this.__MainNode.style.alignSelf                        } set alignSelf                       (value) { this.__MainNode.style.alignSelf                       = value }
            get all                             () { return this.__MainNode.style.all                              } set all                             (value) { this.__MainNode.style.all                             = value }
            get animation                       () { return this.__MainNode.style.animation                        } set animation                       (value) { this.__MainNode.style.animation                       = value }
            get animationDelay                  () { return this.__MainNode.style.animationDelay                   } set animationDelay                  (value) { this.__MainNode.style.animationDelay                  = value }
            get animationDirection              () { return this.__MainNode.style.animationDirection               } set animationDirection              (value) { this.__MainNode.style.animationDirection              = value }
            get animationDuration               () { return this.__MainNode.style.animationDuration                } set animationDuration               (value) { this.__MainNode.style.animationDuration               = value }
            get animationFillMode               () { return this.__MainNode.style.animationFillMode                } set animationFillMode               (value) { this.__MainNode.style.animationFillMode               = value }
            get animationIterationCount         () { return this.__MainNode.style.animationIterationCount          } set animationIterationCount         (value) { this.__MainNode.style.animationIterationCount         = value }
            get animationName                   () { return this.__MainNode.style.animationName                    } set animationName                   (value) { this.__MainNode.style.animationName                   = value }
            get animationPlayState              () { return this.__MainNode.style.animationPlayState               } set animationPlayState              (value) { this.__MainNode.style.animationPlayState              = value }
            get animationTimingFunction         () { return this.__MainNode.style.animationTimingFunction          } set animationTimingFunction         (value) { this.__MainNode.style.animationTimingFunction         = value }
            get backfaceVisibility              () { return this.__MainNode.style.backfaceVisibility               } set backfaceVisibility              (value) { this.__MainNode.style.backfaceVisibility              = value }
            get background                      () { return this.__MainNode.style.background                       } set background                      (value) { this.__MainNode.style.background                      = value }
            get backgroundAttachment            () { return this.__MainNode.style.backgroundAttachment             } set backgroundAttachment            (value) { this.__MainNode.style.backgroundAttachment            = value }
            get backgroundBlendMode             () { return this.__MainNode.style.backgroundBlendMode              } set backgroundBlendMode             (value) { this.__MainNode.style.backgroundBlendMode             = value }
            get backgroundClip                  () { return this.__MainNode.style.backgroundClip                   } set backgroundClip                  (value) { this.__MainNode.style.backgroundClip                  = value }
            get backgroundColor                 () { return this.__MainNode.style.backgroundColor                  } set backgroundColor                 (value) { this.__MainNode.style.backgroundColor                 = value }
            get backgroundImage                 () { return this.__MainNode.style.backgroundImage                  } set backgroundImage                 (value) { this.__MainNode.style.backgroundImage                 = value }
            get backgroundOrigin                () { return this.__MainNode.style.backgroundOrigin                 } set backgroundOrigin                (value) { this.__MainNode.style.backgroundOrigin                = value }
            get backgroundPosition              () { return this.__MainNode.style.backgroundPosition               } set backgroundPosition              (value) { this.__MainNode.style.backgroundPosition              = value }
            get backgroundRepeat                () { return this.__MainNode.style.backgroundRepeat                 } set backgroundRepeat                (value) { this.__MainNode.style.backgroundRepeat                = value }
            get backgroundSize                  () { return this.__MainNode.style.backgroundSize                   } set backgroundSize                  (value) { this.__MainNode.style.backgroundSize                  = value }
            get border                          () { return this.__MainNode.style.border                           } set border                          (value) { this.__MainNode.style.border                          = value }
            get borderBottom                    () { return this.__MainNode.style.borderBottom                     } set borderBottom                    (value) { this.__MainNode.style.borderBottom                    = value }
            get borderBottomColor               () { return this.__MainNode.style.borderBottomColor                } set borderBottomColor               (value) { this.__MainNode.style.borderBottomColor               = value }
            get borderBottomLeftRadius          () { return this.__MainNode.style.borderBottomLeftRadius           } set borderBottomLeftRadius          (value) { this.__MainNode.style.borderBottomLeftRadius          = value }
            get borderBottomRightRadius         () { return this.__MainNode.style.borderBottomRightRadius          } set borderBottomRightRadius         (value) { this.__MainNode.style.borderBottomRightRadius         = value }
            get borderBottomStyle               () { return this.__MainNode.style.borderBottomStyle                } set borderBottomStyle               (value) { this.__MainNode.style.borderBottomStyle               = value }
            get borderBottomWidth               () { return this.__MainNode.style.borderBottomWidth                } set borderBottomWidth               (value) { this.__MainNode.style.borderBottomWidth               = value }
            get borderCollapse                  () { return this.__MainNode.style.borderCollapse                   } set borderCollapse                  (value) { this.__MainNode.style.borderCollapse                  = value }
            get borderColor                     () { return this.__MainNode.style.borderColor                      } set borderColor                     (value) { this.__MainNode.style.borderColor                     = value }
            get borderImage                     () { return this.__MainNode.style.borderImage                      } set borderImage                     (value) { this.__MainNode.style.borderImage                     = value }
            get borderImageOutset               () { return this.__MainNode.style.borderImageOutset                } set borderImageOutset               (value) { this.__MainNode.style.borderImageOutset               = value }
            get borderImageRepeat               () { return this.__MainNode.style.borderImageRepeat                } set borderImageRepeat               (value) { this.__MainNode.style.borderImageRepeat               = value }
            get borderImageSlice                () { return this.__MainNode.style.borderImageSlice                 } set borderImageSlice                (value) { this.__MainNode.style.borderImageSlice                = value }
            get borderImageSource               () { return this.__MainNode.style.borderImageSource                } set borderImageSource               (value) { this.__MainNode.style.borderImageSource               = value }
            get borderImageWidth                () { return this.__MainNode.style.borderImageWidth                 } set borderImageWidth                (value) { this.__MainNode.style.borderImageWidth                = value }
            get borderLeft                      () { return this.__MainNode.style.borderLeft                       } set borderLeft                      (value) { this.__MainNode.style.borderLeft                      = value }
            get borderLeftColor                 () { return this.__MainNode.style.borderLeftColor                  } set borderLeftColor                 (value) { this.__MainNode.style.borderLeftColor                 = value }
            get borderLeftStyle                 () { return this.__MainNode.style.borderLeftStyle                  } set borderLeftStyle                 (value) { this.__MainNode.style.borderLeftStyle                 = value }
            get borderLeftWidth                 () { return this.__MainNode.style.borderLeftWidth                  } set borderLeftWidth                 (value) { this.__MainNode.style.borderLeftWidth                 = value }
            get borderRadius                    () { return this.__MainNode.style.borderRadius                     } set borderRadius                    (value) { this.__MainNode.style.borderRadius                    = value }
            get borderRight                     () { return this.__MainNode.style.borderRight                      } set borderRight                     (value) { this.__MainNode.style.borderRight                     = value }
            get borderRightColor                () { return this.__MainNode.style.borderRightColor                 } set borderRightColor                (value) { this.__MainNode.style.borderRightColor                = value }
            get borderRightStyle                () { return this.__MainNode.style.borderRightStyle                 } set borderRightStyle                (value) { this.__MainNode.style.borderRightStyle                = value }
            get borderRightWidth                () { return this.__MainNode.style.borderRightWidth                 } set borderRightWidth                (value) { this.__MainNode.style.borderRightWidth                = value }
            get borderSpacing                   () { return this.__MainNode.style.borderSpacing                    } set borderSpacing                   (value) { this.__MainNode.style.borderSpacing                   = value }
            get borderStyle                     () { return this.__MainNode.style.borderStyle                      } set borderStyle                     (value) { this.__MainNode.style.borderStyle                     = value }
            get borderTop                       () { return this.__MainNode.style.borderTop                        } set borderTop                       (value) { this.__MainNode.style.borderTop                       = value }
            get borderTopColor                  () { return this.__MainNode.style.borderTopColor                   } set borderTopColor                  (value) { this.__MainNode.style.borderTopColor                  = value }
            get borderTopLeftRadius             () { return this.__MainNode.style.borderTopLeftRadius              } set borderTopLeftRadius             (value) { this.__MainNode.style.borderTopLeftRadius             = value }
            get borderTopRightRadius            () { return this.__MainNode.style.borderTopRightRadius             } set borderTopRightRadius            (value) { this.__MainNode.style.borderTopRightRadius            = value }
            get borderTopStyle                  () { return this.__MainNode.style.borderTopStyle                   } set borderTopStyle                  (value) { this.__MainNode.style.borderTopStyle                  = value }
            get borderTopWidth                  () { return this.__MainNode.style.borderTopWidth                   } set borderTopWidth                  (value) { this.__MainNode.style.borderTopWidth                  = value }
            get borderWidth                     () { return this.__MainNode.style.borderWidth                      } set borderWidth                     (value) { this.__MainNode.style.borderWidth                     = value }
            get bottom                          () { return this.__MainNode.style.bottom                           } set bottom                          (value) { this.__MainNode.style.bottom                          = value }
            get boxDecorationBreak              () { return this.__MainNode.style.boxDecorationBreak               } set boxDecorationBreak              (value) { this.__MainNode.style.boxDecorationBreak              = value }
            get boxShadow                       () { return this.__MainNode.style.boxShadow                        } set boxShadow                       (value) { this.__MainNode.style.boxShadow                       = value }
            get boxSizing                       () { return this.__MainNode.style.boxSizing                        } set boxSizing                       (value) { this.__MainNode.style.boxSizing                       = value }
            get breakAfter                      () { return this.__MainNode.style.breakAfter                       } set breakAfter                      (value) { this.__MainNode.style.breakAfter                      = value }
            get breakBefore                     () { return this.__MainNode.style.breakBefore                      } set breakBefore                     (value) { this.__MainNode.style.breakBefore                     = value }
            get breakInside                     () { return this.__MainNode.style.breakInside                      } set breakInside                     (value) { this.__MainNode.style.breakInside                     = value }
            get captionSide                     () { return this.__MainNode.style.captionSide                      } set captionSide                     (value) { this.__MainNode.style.captionSide                     = value }
            get caretColor                      () { return this.__MainNode.style.caretColor                       } set caretColor                      (value) { this.__MainNode.style.caretColor                      = value }
            get Atcharset                       () { return this.__MainNode.style.Atcharset                        } set Atcharset                       (value) { this.__MainNode.style.Atcharset                       = value }
            get clear                           () { return this.__MainNode.style.clear                            } set clear                           (value) { this.__MainNode.style.clear                           = value }
            get clip                            () { return this.__MainNode.style.clip                             } set clip                            (value) { this.__MainNode.style.clip                            = value }
            get color                           () { return this.__MainNode.style.color                            } set color                           (value) { this.__MainNode.style.color                           = value }
            get columnCount                     () { return this.__MainNode.style.columnCount                      } set columnCount                     (value) { this.__MainNode.style.columnCount                     = value }
            get columnFill                      () { return this.__MainNode.style.columnFill                       } set columnFill                      (value) { this.__MainNode.style.columnFill                      = value }
            get columnGap                       () { return this.__MainNode.style.columnGap                        } set columnGap                       (value) { this.__MainNode.style.columnGap                       = value }
            get columnRule                      () { return this.__MainNode.style.columnRule                       } set columnRule                      (value) { this.__MainNode.style.columnRule                      = value }
            get columnRuleColor                 () { return this.__MainNode.style.columnRuleColor                  } set columnRuleColor                 (value) { this.__MainNode.style.columnRuleColor                 = value }
            get columnRuleStyle                 () { return this.__MainNode.style.columnRuleStyle                  } set columnRuleStyle                 (value) { this.__MainNode.style.columnRuleStyle                 = value }
            get columnRuleWidth                 () { return this.__MainNode.style.columnRuleWidth                  } set columnRuleWidth                 (value) { this.__MainNode.style.columnRuleWidth                 = value }
            get columnSpan                      () { return this.__MainNode.style.columnSpan                       } set columnSpan                      (value) { this.__MainNode.style.columnSpan                      = value }
            get columnWidth                     () { return this.__MainNode.style.columnWidth                      } set columnWidth                     (value) { this.__MainNode.style.columnWidth                     = value }
            get columns                         () { return this.__MainNode.style.columns                          } set columns                         (value) { this.__MainNode.style.columns                         = value }
            get content                         () { return this.__MainNode.style.content                          } set content                         (value) { this.__MainNode.style.content                         = value }
            get counterIncrement                () { return this.__MainNode.style.counterIncrement                 } set counterIncrement                (value) { this.__MainNode.style.counterIncrement                = value }
            get counterReset                    () { return this.__MainNode.style.counterReset                     } set counterReset                    (value) { this.__MainNode.style.counterReset                    = value }
            get cursor                          () { return this.__MainNode.style.cursor                           } set cursor                          (value) { this.__MainNode.style.cursor                          = value }
            get direction                       () { return this.__MainNode.style.direction                        } set direction                       (value) { this.__MainNode.style.direction                       = value }
            get display                         () { return this.__MainNode.style.display                          } set display                         (value) { this.__MainNode.style.display                         = value }
            get emptyCells                      () { return this.__MainNode.style.emptyCells                       } set emptyCells                      (value) { this.__MainNode.style.emptyCells                      = value }
            get filter                          () { return this.__MainNode.style.filter                           } set filter                          (value) { this.__MainNode.style.filter                          = value }
            get flex                            () { return this.__MainNode.style.flex                             } set flex                            (value) { this.__MainNode.style.flex                            = value }
            get flexBasis                       () { return this.__MainNode.style.flexBasis                        } set flexBasis                       (value) { this.__MainNode.style.flexBasis                       = value }
            get flexDirection                   () { return this.__MainNode.style.flexDirection                    } set flexDirection                   (value) { this.__MainNode.style.flexDirection                   = value }
            get flexFlow                        () { return this.__MainNode.style.flexFlow                         } set flexFlow                        (value) { this.__MainNode.style.flexFlow                        = value }
            get flexGrow                        () { return this.__MainNode.style.flexGrow                         } set flexGrow                        (value) { this.__MainNode.style.flexGrow                        = value }
            get flexShrink                      () { return this.__MainNode.style.flexShrink                       } set flexShrink                      (value) { this.__MainNode.style.flexShrink                      = value }
            get flexWrap                        () { return this.__MainNode.style.flexWrap                         } set flexWrap                        (value) { this.__MainNode.style.flexWrap                        = value }
            get float                           () { return this.__MainNode.style.float                            } set float                           (value) { this.__MainNode.style.float                           = value }
            get font                            () { return this.__MainNode.style.font                             } set font                            (value) { this.__MainNode.style.font                            = value }
            get AtfontFace                      () { return this.__MainNode.style.AtfontFace                       } set AtfontFace                      (value) { this.__MainNode.style.AtfontFace                      = value }
            get fontFamily                      () { return this.__MainNode.style.fontFamily                       } set fontFamily                      (value) { this.__MainNode.style.fontFamily                      = value }
            get fontFeatureSettings             () { return this.__MainNode.style.fontFeatureSettings              } set fontFeatureSettings             (value) { this.__MainNode.style.fontFeatureSettings             = value }
            get AtfontFeatureValues             () { return this.__MainNode.style.AtfontFeatureValues              } set AtfontFeatureValues             (value) { this.__MainNode.style.AtfontFeatureValues             = value }
            get fontKerning                     () { return this.__MainNode.style.fontKerning                      } set fontKerning                     (value) { this.__MainNode.style.fontKerning                     = value }
            get fontLanguageOverride            () { return this.__MainNode.style.fontLanguageOverride             } set fontLanguageOverride            (value) { this.__MainNode.style.fontLanguageOverride            = value }
            get fontSize                        () { return this.__MainNode.style.fontSize                         } set fontSize                        (value) { this.__MainNode.style.fontSize                        = value }
            get fontSizeAdjust                  () { return this.__MainNode.style.fontSizeAdjust                   } set fontSizeAdjust                  (value) { this.__MainNode.style.fontSizeAdjust                  = value }
            get fontStretch                     () { return this.__MainNode.style.fontStretch                      } set fontStretch                     (value) { this.__MainNode.style.fontStretch                     = value }
            get fontStyle                       () { return this.__MainNode.style.fontStyle                        } set fontStyle                       (value) { this.__MainNode.style.fontStyle                       = value }
            get fontSynthesis                   () { return this.__MainNode.style.fontSynthesis                    } set fontSynthesis                   (value) { this.__MainNode.style.fontSynthesis                   = value }
            get fontVariant                     () { return this.__MainNode.style.fontVariant                      } set fontVariant                     (value) { this.__MainNode.style.fontVariant                     = value }
            get fontVariantAlternates           () { return this.__MainNode.style.fontVariantAlternates            } set fontVariantAlternates           (value) { this.__MainNode.style.fontVariantAlternates           = value }
            get fontVariantCaps                 () { return this.__MainNode.style.fontVariantCaps                  } set fontVariantCaps                 (value) { this.__MainNode.style.fontVariantCaps                 = value }
            get fontVariantEastAsian            () { return this.__MainNode.style.fontVariantEastAsian             } set fontVariantEastAsian            (value) { this.__MainNode.style.fontVariantEastAsian            = value }
            get fontVariantLigatures            () { return this.__MainNode.style.fontVariantLigatures             } set fontVariantLigatures            (value) { this.__MainNode.style.fontVariantLigatures            = value }
            get fontVariantNumeric              () { return this.__MainNode.style.fontVariantNumeric               } set fontVariantNumeric              (value) { this.__MainNode.style.fontVariantNumeric              = value }
            get fontVariantPosition             () { return this.__MainNode.style.fontVariantPosition              } set fontVariantPosition             (value) { this.__MainNode.style.fontVariantPosition             = value }
            get fontWeight                      () { return this.__MainNode.style.fontWeight                       } set fontWeight                      (value) { this.__MainNode.style.fontWeight                      = value }
            get grid                            () { return this.__MainNode.style.grid                             } set grid                            (value) { this.__MainNode.style.grid                            = value }
            get gridArea                        () { return this.__MainNode.style.gridArea                         } set gridArea                        (value) { this.__MainNode.style.gridArea                        = value }
            get gridAutoColumns                 () { return this.__MainNode.style.gridAutoColumns                  } set gridAutoColumns                 (value) { this.__MainNode.style.gridAutoColumns                 = value }
            get gridAutoFlow                    () { return this.__MainNode.style.gridAutoFlow                     } set gridAutoFlow                    (value) { this.__MainNode.style.gridAutoFlow                    = value }
            get gridAutoRows                    () { return this.__MainNode.style.gridAutoRows                     } set gridAutoRows                    (value) { this.__MainNode.style.gridAutoRows                    = value }
            get gridColumn                      () { return this.__MainNode.style.gridColumn                       } set gridColumn                      (value) { this.__MainNode.style.gridColumn                      = value }
            get gridColumnEnd                   () { return this.__MainNode.style.gridColumnEnd                    } set gridColumnEnd                   (value) { this.__MainNode.style.gridColumnEnd                   = value }
            get gridColumnGap                   () { return this.__MainNode.style.gridColumnGap                    } set gridColumnGap                   (value) { this.__MainNode.style.gridColumnGap                   = value }
            get gridColumnStart                 () { return this.__MainNode.style.gridColumnStart                  } set gridColumnStart                 (value) { this.__MainNode.style.gridColumnStart                 = value }
            get gridGap                         () { return this.__MainNode.style.gridGap                          } set gridGap                         (value) { this.__MainNode.style.gridGap                         = value }
            get gridRow                         () { return this.__MainNode.style.gridRow                          } set gridRow                         (value) { this.__MainNode.style.gridRow                         = value }
            get gridRowEnd                      () { return this.__MainNode.style.gridRowEnd                       } set gridRowEnd                      (value) { this.__MainNode.style.gridRowEnd                      = value }
            get gridRowGap                      () { return this.__MainNode.style.gridRowGap                       } set gridRowGap                      (value) { this.__MainNode.style.gridRowGap                      = value }
            get gridRowStart                    () { return this.__MainNode.style.gridRowStart                     } set gridRowStart                    (value) { this.__MainNode.style.gridRowStart                    = value }
            get gridTemplate                    () { return this.__MainNode.style.gridTemplate                     } set gridTemplate                    (value) { this.__MainNode.style.gridTemplate                    = value }
            get gridTemplateAreas               () { return this.__MainNode.style.gridTemplateAreas                } set gridTemplateAreas               (value) { this.__MainNode.style.gridTemplateAreas               = value }
            get gridTemplateColumns             () { return this.__MainNode.style.gridTemplateColumns              } set gridTemplateColumns             (value) { this.__MainNode.style.gridTemplateColumns             = value }
            get gridTemplateRows                () { return this.__MainNode.style.gridTemplateRows                 } set gridTemplateRows                (value) { this.__MainNode.style.gridTemplateRows                = value }
            get hangingPunctuation              () { return this.__MainNode.style.hangingPunctuation               } set hangingPunctuation              (value) { this.__MainNode.style.hangingPunctuation              = value }
            get height                          () { return this.__MainNode.style.height                           } set height                          (value) { this.__MainNode.style.height                          = value }
            get hyphens                         () { return this.__MainNode.style.hyphens                          } set hyphens                         (value) { this.__MainNode.style.hyphens                         = value }
            get imageOrientation                () { return this.__MainNode.style.imageOrientation                 } set imageOrientation                (value) { this.__MainNode.style.imageOrientation                = value }
            get imageRendering                  () { return this.__MainNode.style.imageRendering                   } set imageRendering                  (value) { this.__MainNode.style.imageRendering                  = value }
            get imageResolution                 () { return this.__MainNode.style.imageResolution                  } set imageResolution                 (value) { this.__MainNode.style.imageResolution                 = value }
            get Atimport                        () { return this.__MainNode.style.Atimport                         } set Atimport                        (value) { this.__MainNode.style.Atimport                        = value }
            get justifyContent                  () { return this.__MainNode.style.justifyContent                   } set justifyContent                  (value) { this.__MainNode.style.justifyContent                  = value }
            get Atkeyframes                     () { return this.__MainNode.style.Atkeyframes                      } set Atkeyframes                     (value) { this.__MainNode.style.Atkeyframes                     = value }
            get left                            () { return this.__MainNode.style.left                             } set left                            (value) { this.__MainNode.style.left                            = value }
            get letterSpacing                   () { return this.__MainNode.style.letterSpacing                    } set letterSpacing                   (value) { this.__MainNode.style.letterSpacing                   = value }
            get lineBreak                       () { return this.__MainNode.style.lineBreak                        } set lineBreak                       (value) { this.__MainNode.style.lineBreak                       = value }
            get lineHeight                      () { return this.__MainNode.style.lineHeight                       } set lineHeight                      (value) { this.__MainNode.style.lineHeight                      = value }
            get listStyle                       () { return this.__MainNode.style.listStyle                        } set listStyle                       (value) { this.__MainNode.style.listStyle                       = value }
            get listStyleImage                  () { return this.__MainNode.style.listStyleImage                   } set listStyleImage                  (value) { this.__MainNode.style.listStyleImage                  = value }
            get listStylePosition               () { return this.__MainNode.style.listStylePosition                } set listStylePosition               (value) { this.__MainNode.style.listStylePosition               = value }
            get listStyleType                   () { return this.__MainNode.style.listStyleType                    } set listStyleType                   (value) { this.__MainNode.style.listStyleType                   = value }
            get margin                          () { return this.__MainNode.style.margin                           } set margin                          (value) { this.__MainNode.style.margin                          = value }
            get marginBottom                    () { return this.__MainNode.style.marginBottom                     } set marginBottom                    (value) { this.__MainNode.style.marginBottom                    = value }
            get marginLeft                      () { return this.__MainNode.style.marginLeft                       } set marginLeft                      (value) { this.__MainNode.style.marginLeft                      = value }
            get marginRight                     () { return this.__MainNode.style.marginRight                      } set marginRight                     (value) { this.__MainNode.style.marginRight                     = value }
            get marginTop                       () { return this.__MainNode.style.marginTop                        } set marginTop                       (value) { this.__MainNode.style.marginTop                       = value }
            get maxHeight                       () { return this.__MainNode.style.maxHeight                        } set maxHeight                       (value) { this.__MainNode.style.maxHeight                       = value }
            get maxWidth                        () { return this.__MainNode.style.maxWidth                         } set maxWidth                        (value) { this.__MainNode.style.maxWidth                        = value }
            get Atmedia                         () { return this.__MainNode.style.Atmedia                          } set Atmedia                         (value) { this.__MainNode.style.Atmedia                         = value }
            get minHeight                       () { return this.__MainNode.style.minHeight                        } set minHeight                       (value) { this.__MainNode.style.minHeight                       = value }
            get minWidth                        () { return this.__MainNode.style.minWidth                         } set minWidth                        (value) { this.__MainNode.style.minWidth                        = value }
            get objectFit                       () { return this.__MainNode.style.objectFit                        } set objectFit                       (value) { this.__MainNode.style.objectFit                       = value }
            get objectPosition                  () { return this.__MainNode.style.objectPosition                   } set objectPosition                  (value) { this.__MainNode.style.objectPosition                  = value }
            get opacity                         () { return this.__MainNode.style.opacity                          } set opacity                         (value) { this.__MainNode.style.opacity                         = value }
            get order                           () { return this.__MainNode.style.order                            } set order                           (value) { this.__MainNode.style.order                           = value }
            get orphans                         () { return this.__MainNode.style.orphans                          } set orphans                         (value) { this.__MainNode.style.orphans                         = value }
            get outline                         () { return this.__MainNode.style.outline                          } set outline                         (value) { this.__MainNode.style.outline                         = value }
            get outlineColor                    () { return this.__MainNode.style.outlineColor                     } set outlineColor                    (value) { this.__MainNode.style.outlineColor                    = value }
            get outlineOffset                   () { return this.__MainNode.style.outlineOffset                    } set outlineOffset                   (value) { this.__MainNode.style.outlineOffset                   = value }
            get outlineStyle                    () { return this.__MainNode.style.outlineStyle                     } set outlineStyle                    (value) { this.__MainNode.style.outlineStyle                    = value }
            get outlineWidth                    () { return this.__MainNode.style.outlineWidth                     } set outlineWidth                    (value) { this.__MainNode.style.outlineWidth                    = value }
            get overflowWrap                    () { return this.__MainNode.style.overflowWrap                     } set overflowWrap                    (value) { this.__MainNode.style.overflowWrap                    = value }
            get overflowX                       () { return this.__MainNode.style.overflowX                        } set overflowX                       (value) { this.__MainNode.style.overflowX                       = value }
            get overflowY                       () { return this.__MainNode.style.overflowY                        } set overflowY                       (value) { this.__MainNode.style.overflowY                       = value }
            get padding                         () { return this.__MainNode.style.padding                          } set padding                         (value) { this.__MainNode.style.padding                         = value }
            get paddingBottom                   () { return this.__MainNode.style.paddingBottom                    } set paddingBottom                   (value) { this.__MainNode.style.paddingBottom                   = value }
            get paddingLeft                     () { return this.__MainNode.style.paddingLeft                      } set paddingLeft                     (value) { this.__MainNode.style.paddingLeft                     = value }
            get paddingRight                    () { return this.__MainNode.style.paddingRight                     } set paddingRight                    (value) { this.__MainNode.style.paddingRight                    = value }
            get paddingTop                      () { return this.__MainNode.style.paddingTop                       } set paddingTop                      (value) { this.__MainNode.style.paddingTop                      = value }
            get pageBreakAfter                  () { return this.__MainNode.style.pageBreakAfter                   } set pageBreakAfter                  (value) { this.__MainNode.style.pageBreakAfter                  = value }
            get pageBreakBefore                 () { return this.__MainNode.style.pageBreakBefore                  } set pageBreakBefore                 (value) { this.__MainNode.style.pageBreakBefore                 = value }
            get pageBreakInside                 () { return this.__MainNode.style.pageBreakInside                  } set pageBreakInside                 (value) { this.__MainNode.style.pageBreakInside                 = value }
            get perspective                     () { return this.__MainNode.style.perspective                      } set perspective                     (value) { this.__MainNode.style.perspective                     = value }
            get perspectiveOrigin               () { return this.__MainNode.style.perspectiveOrigin                } set perspectiveOrigin               (value) { this.__MainNode.style.perspectiveOrigin               = value }
            get pointerEvents                   () { return this.__MainNode.style.pointerEvents                    } set pointerEvents                   (value) { this.__MainNode.style.pointerEvents                   = value }
            get position                        () { return this.__MainNode.style.position                         } set position                        (value) { this.__MainNode.style.position                        = value }
            get quotes                          () { return this.__MainNode.style.quotes                           } set quotes                          (value) { this.__MainNode.style.quotes                          = value }
            get resize                          () { return this.__MainNode.style.resize                           } set resize                          (value) { this.__MainNode.style.resize                          = value }
            get right                           () { return this.__MainNode.style.right                            } set right                           (value) { this.__MainNode.style.right                           = value }
            get tabSize                         () { return this.__MainNode.style.tabSize                          } set tabSize                         (value) { this.__MainNode.style.tabSize                         = value }
            get tableLayout                     () { return this.__MainNode.style.tableLayout                      } set tableLayout                     (value) { this.__MainNode.style.tableLayout                     = value }
            get textAlign                       () { return this.__MainNode.style.textAlign                        } set textAlign                       (value) { this.__MainNode.style.textAlign                       = value }
            get textAlignLast                   () { return this.__MainNode.style.textAlignLast                    } set textAlignLast                   (value) { this.__MainNode.style.textAlignLast                   = value }
            get textCombineUpright              () { return this.__MainNode.style.textCombineUpright               } set textCombineUpright              (value) { this.__MainNode.style.textCombineUpright              = value }
            get textDecoration                  () { return this.__MainNode.style.textDecoration                   } set textDecoration                  (value) { this.__MainNode.style.textDecoration                  = value }
            get textDecorationColor             () { return this.__MainNode.style.textDecorationColor              } set textDecorationColor             (value) { this.__MainNode.style.textDecorationColor             = value }
            get textDecorationLine              () { return this.__MainNode.style.textDecorationLine               } set textDecorationLine              (value) { this.__MainNode.style.textDecorationLine              = value }
            get textDecorationStyle             () { return this.__MainNode.style.textDecorationStyle              } set textDecorationStyle             (value) { this.__MainNode.style.textDecorationStyle             = value }
            get textIndent                      () { return this.__MainNode.style.textIndent                       } set textIndent                      (value) { this.__MainNode.style.textIndent                      = value }
            get textJustify                     () { return this.__MainNode.style.textJustify                      } set textJustify                     (value) { this.__MainNode.style.textJustify                     = value }
            get textOrientation                 () { return this.__MainNode.style.textOrientation                  } set textOrientation                 (value) { this.__MainNode.style.textOrientation                 = value }
            get textOverflow                    () { return this.__MainNode.style.textOverflow                     } set textOverflow                    (value) { this.__MainNode.style.textOverflow                    = value }
            get textShadow                      () { return this.__MainNode.style.textShadow                       } set textShadow                      (value) { this.__MainNode.style.textShadow                      = value }
            get textTransform                   () { return this.__MainNode.style.textTransform                    } set textTransform                   (value) { this.__MainNode.style.textTransform                   = value }
            get textUnderlinePosition           () { return this.__MainNode.style.textUnderlinePosition            } set textUnderlinePosition           (value) { this.__MainNode.style.textUnderlinePosition           = value }
            get top                             () { return this.__MainNode.style.top                              } set top                             (value) { this.__MainNode.style.top                             = value }
            get transform                       () { return this.__MainNode.style.transform                        } set transform                       (value) { this.__MainNode.style.transform                       = value }
            get transformOrigin                 () { return this.__MainNode.style.transformOrigin                  } set transformOrigin                 (value) { this.__MainNode.style.transformOrigin                 = value }
            get transformStyle                  () { return this.__MainNode.style.transformStyle                   } set transformStyle                  (value) { this.__MainNode.style.transformStyle                  = value }
            get transition                      () { return this.__MainNode.style.transition                       } set transition                      (value) { this.__MainNode.style.transition                      = value }
            get transitionDelay                 () { return this.__MainNode.style.transitionDelay                  } set transitionDelay                 (value) { this.__MainNode.style.transitionDelay                 = value }
            get transitionDuration              () { return this.__MainNode.style.transitionDuration               } set transitionDuration              (value) { this.__MainNode.style.transitionDuration              = value }
            get transitionProperty              () { return this.__MainNode.style.transitionProperty               } set transitionProperty              (value) { this.__MainNode.style.transitionProperty              = value }
            get transitionTimingFunction        () { return this.__MainNode.style.transitionTimingFunction         } set transitionTimingFunction        (value) { this.__MainNode.style.transitionTimingFunction        = value }
            get unicodeBidi                     () { return this.__MainNode.style.unicodeBidi                      } set unicodeBidi                     (value) { this.__MainNode.style.unicodeBidi                     = value }
            get userSelect                      () { return this.__MainNode.style.userSelect                       } set userSelect                      (value) { this.__MainNode.style.userSelect                      = value }
            get verticalAlign                   () { return this.__MainNode.style.verticalAlign                    } set verticalAlign                   (value) { this.__MainNode.style.verticalAlign                   = value }
            get visibility                      () { return this.__MainNode.style.visibility                       } set visibility                      (value) { this.__MainNode.style.visibility                      = value }
            get whiteSpace                      () { return this.__MainNode.style.whiteSpace                       } set whiteSpace                      (value) { this.__MainNode.style.whiteSpace                      = value }
            get widows                          () { return this.__MainNode.style.widows                           } set widows                          (value) { this.__MainNode.style.widows                          = value }
            get width                           () { return this.__MainNode.style.width                            } set width                           (value) { this.__MainNode.style.width                           = value }
            get wordBreak                       () { return this.__MainNode.style.wordBreak                        } set wordBreak                       (value) { this.__MainNode.style.wordBreak                       = value }
            get wordSpacing                     () { return this.__MainNode.style.wordSpacing                      } set wordSpacing                     (value) { this.__MainNode.style.wordSpacing                     = value }
            get wordWrap                        () { return this.__MainNode.style.wordWrap                         } set wordWrap                        (value) { this.__MainNode.style.wordWrap                        = value }
            get writingMode                     () { return this.__MainNode.style.writingMode                      } set writingMode                     (value) { this.__MainNode.style.writingMode                     = value }
            get zIndex                          () { return this.__MainNode.style.zIndex                           } set zIndex                          (value) { this.__MainNode.style.zIndex                          = value }
    }
class Div extends SimpleElement
    {
        constructor(styles,...elements)
            {
                super()
                this.__MainNode = New("div",styles)
                for (var each in elements)
                    {
                        this.__MainNode.add(each)
                    }
            }
    }
class P extends SimpleElement
    {
        constructor(styles,...elements)
            {
                super()
                this.__MainNode = New("p",styles)
                for (var each in elements)
                    {
                        this.__MainNode.add(each)
                    }
            }
    }
class H1 extends SimpleElement
    {
        constructor(styles,...elements)
            {
                super()
                this.__MainNode = New("h1",styles)
                for (var each in elements)
                    {
                        this.__MainNode.add(each)
                    }
            }
    }
class H2 extends SimpleElement
    {
        constructor(styles,...elements)
            {
                super()
                this.__MainNode = New("h2",styles)
                for (var each in elements)
                    {
                        this.__MainNode.add(each)
                    }
            }
    }
class H3 extends SimpleElement
    {
        constructor(styles,...elements)
            {
                super()
                this.__MainNode = New("h3",styles)
                for (var each in elements)
                    {
                        this.__MainNode.add(each)
                    }
            }
    }
class H4 extends SimpleElement
    {
        constructor(styles,...elements)
            {
                super()
                this.__MainNode = New("h4",styles)
                for (var each in elements)
                    {
                        this.__MainNode.add(each)
                    }
            }
    }
class H5 extends SimpleElement
    {
        constructor(styles,...elements)
            {
                super()
                this.__MainNode = New("h5",styles)
                for (var each in elements)
                    {
                        this.__MainNode.add(each)
                    }
            }
    }
class A extends SimpleElement
    {
        constructor(inputs_={link:null, text:null})
            {
                if (inputs_.link != null)
                    {
                        inputs_.href = inputs_.link
                    }
                if (inputs_.text != null)
                    {
                        // FIXME, make sure to update this later to use the Text class
                        inputs_.innerHTML = inputs_.text
                    }
                super(New("a", inputs_))
            }
    }
class Button extends SimpleElement
    {
        constructor(styles)
            {
                super()
                this.__MainNode = New("Button",styles)
            }
    }
class Link extends SimpleElement 
    {
        constructor(inputs_={link:null, text:null})
            {
                if (inputs_.link != null)
                    {
                        inputs_.href = inputs_.link
                    }
                if (inputs_.text != null)
                    {
                        // FIXME, make sure to update this later to use the Text class
                        inputs_.innerHTML = inputs_.text
                    }
                super(New("a", inputs_))
            }
    }
class Container extends SimpleElement
    {
        constructor(styles,element)
            {
                super()
                this.__Child = element
                this.__MainNode  = New("div", { class:"container", height: "100%", width: "100%", display:"flex", position: "relative" })
                SetStyle(this.__MainNode,styles)
                if (this.__Child)
                    {
                        this.__MainNode.add(this.__Child)
                    }
            }
        add(element)
            {
                if (this.__Child == null)
                    {
                        this.__Child = element
                        this.__MainNode.add(this.__Child)
                    }
                else
                    {
                        console.error("You tried to add an element to Container that already had one. Element:", element)
                    }
                return this
            }
        // vertical choices
            alignTop()
                {
                    this.__MainNode.style.alignItems = "flex-start"
                }
            alignBottom()
                {
                    this.__MainNode.style.alignItems = "flex-end"
                }
            centerVertically()
                {
                    this.__MainNode.style.alignItems = "center"
                }
        // horizontal choices
            leftAlign()
                {
                    this.__MainNode.style.justifyContent = "flex-start"
                }
            rightAlign()
                {
                    this.__MainNode.style.justifyContent = "flex-end"
                }
            centerHorizontally()
                {
                    this.__MainNode.style.justifyContent = "center"
                }
        // center both ways
            center()
                {
                    this.__MainNode.style.justifyContent = "center"
                    this.__MainNode.style.alignItems = "center"
                }
    }
class Card extends Container
    {
        constructor(styles,element)
            {
                super()
                this.__Child = element
                this.__MainNode  = New("div", { class:"card-panel", height: "100%", width: "100%", display:"flex", justifyContent:"center", position: "relative" })
                SetStyle(this.__MainNode, styles)
                if (this.__Child)
                    {
                        this.__MainNode.add(this.__Child)
                    }
            }
    }
class VerticalList extends SimpleElement
    {
        constructor(...inputs)
            {
                super()
                var styles = null
                var elements = []
                if (inputs.length == 1)
                    {
                        styles = inputs[0]
                    }
                else if (inputs.length > 1)
                    {
                        styles = inputs[0]
                        inputs.splice(0,1) // remove first object
                        elements = inputs
                    }
                
                this.__MainNode = New('div',{ class:"vertical-list", width:"100%" })
                SetStyle(this.__MainNode, styles)
                this.__Wrappers = []
                this.__Alignment = "left" // default to left aligned
                for (var each of elements)
                    {
                        this.createItem(each)
                    }
                // by default left align everything 
                this.leftAlignEach()
            }
        createItem(each)
            {
                var the_wrapper = new Container({ class:"vertical-list-element" , height: "fit-content" })
                the_wrapper.add(each)
                the_wrapper.width = "100%"
                if (this.__Alignment == "left")
                    {
                        the_wrapper.leftAlign()
                    }
                else if (this.__Alignment == "right")
                    {
                        the_wrapper.rightAlign()
                    }
                else
                    {
                        the_wrapper.centerHorizontally()
                    }
                this.__Wrappers.push(the_wrapper)
                this.__MainNode.add(the_wrapper)
            }
        add(...elements)
            {
                // if its an array
                for (var each of elements)
                    {
                        this.createItem(each)
                    }
                return this
            }
        centerEach()
            {
                this.__Alignment = "center"
                for (var each of this.__Wrappers)
                    {
                        each.centerHorizontally()
                    }
            }
        leftAlignEach()
            {
                this.__Alignment = "left"
                for (var each of this.__Wrappers)
                    {
                        each.leftAlign()
                    }
            }
        rightAlignEach()
            {
                this.__Alignment = "right"
                for (var each of this.__Wrappers)
                    {
                        each.rightAlign()
                    }
            }
    }
class Input extends SimpleElement
    {
        // FIXME, add all the events 
        constructor(attributes_)
            {
                super()
                if (!('marginBottom' in attributes_) || attributes_.marginBottom == "")
                    {
                        attributes_.marginBottom = "5px"
                    }
                // create 
                this.__MainNode = New( "div", {width: "100%"})
                this.__list    = new VerticalList({width: "100%"})
                this.__Input = New("Input",attributes_)
                this.error_message = New("span",{ id:`errormsg${Math.random}`,  innerHTML:"", className:"helper-text", color:"#F44336", marginLeft:"20px",marginTop:"0" })

                // attach
                this.__list.add(this.__Input)
                this.__list.add(this.error_message)
                this.__MainNode.add(this.__list)


                // set 
                this.__list.centerEach()
                this.__list.__Wrappers[1].leftAlign()
                if (this.id == "") { this.id = `${Math.random()}` } 
                this.__validator = ()=>{ return {valid: true, error_message:"Invalid" } }
                this.onInvalidOnBlur     = this.defaultOnInvalidOnBlur
                this.onInvalidOnGetValue = this.defaultOnInvalidOnGetValue
                this.__MainNode.onBlur = function (eventObj)
                    {
                        var error_data = this.__validator(this.__Input.value)
                        if (!error_data.valid)
                            {
                                this.onInvalidOnBlur(error_data)
                            }
                        this.onBlur(eventObj)
                    }
                this.__MainNode.onChange = function()
                    {
                        // remove the invalid cases
                        this.__Input.classList.remove("invalid")
                        this.error_message.innerHTML = ""
                    }
                
            }
        get defaultOnInvalidOnGetValue()
            {
                return function (error_data)
                    {
                        // console.log(`onInvalidOnGetValue`)
                        // console.log(`error_data is:`,error_data)
                        // add the invalid class
                        this.__Input.classList.add("invalid")
                        // if there is an error message, show it
                        this.error_message.innerHTML = error_data.error_message
                    }
            }
        get defaultOnInvalidOnBlur()
            {
                return function (error_data) { this.__Input.classList.add("invalid") }
            }
        set label(value)
            {
                // if the value is a string
                if (typeof value == "string")
                    {
                        
                        // if label doesnt exist create it and set the value 
                        if (!('label' in this) || this.label == null) 
                            { 
                                console.log(`no this.label yet`)
                                this.label = New("label",{innerHTML:value}) 
                                this.__list.add(this.label)
                            }
                        // if label does exist just set the value
                        else 
                            { 
                                console.log(`this.label is:`,this.label)
                                this.label.innerHTML = value 
                            }
                        // make sure to set the id
                        this.label.setAttribute('for', this.__Input.id)
                    }
                // FIXME, add support for things other than strings
            }
        set id(value)
            {
                if ('label' in this && this.label != null) 
                    { 
                        this.label.setAttribute('for', this.__Input.id)
                    }
                this.__Input.id = value
            }
        get id() 
            { 
                return this.__Input.id 
            }
        get value()
            {
                var error_data = this.__validator(this.__Input.value)
                if (!error_data.valid)
                    {
                        this.onInvalidOnGetValue(error_data)
                    }
                return this.__Input.value
            }
        set validator(value)
            {
                if (typeof value == "function")
                    {
                        this.__validator = value
                    }
                // FIXME, add regex and string/preset support 
            }
        get validator()
            {
                return this.__validator
            }
    }