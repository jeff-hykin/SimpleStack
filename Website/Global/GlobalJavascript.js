Global.Debugging = true
Global.Website = "http://localhost:5000/"
const css_properties        = {'alignContent': null,'alignItems'    : null,'alignSelf' : null,'all'    : null,'animation': null,'animationDelay': null,'animationDirection': null,'animationDuration': null,'animationFillMode': null,'animationIterationCount': null,'animationName': null,'animationPlayState': null,'animationTimingFunction': null,'backfaceVisibility': null,'background': null,'backgroundAttachment': null,'backgroundBlendMode': null,'backgroundClip': null,'backgroundColor': null,'backgroundImage': null,'backgroundOrigin': null,'backgroundPosition': null,'backgroundRepeat': null,'backgroundSize': null,'border'  : null,'borderBottom'    : null,'borderBottomColor': null,'borderBottomLeftRadius': null,'borderBottomRightRadius': null,'borderBottomStyle': null,'borderBottomWidth': null,'borderCollapse': null,'borderColor': null,'borderImage': null,'borderImageOutset': null,'borderImageRepeat': null,'borderImageSlice': null,'borderImageSource': null,'borderImageWidth': null,'borderLeft': null,'borderLeftColor': null,'borderLeftStyle': null,'borderLeftWidth': null,'borderRadius': null,'borderRight': null,'borderRightColor': null,'borderRightStyle': null,'borderRightWidth': null,'borderSpacing': null,'borderStyle': null,'borderTop': null,'borderTopColor': null,'borderTopLeftRadius': null,'borderTopRightRadius': null,'borderTopStyle': null,'borderTopWidth': null,'borderWidth': null,'bottom'  : null,'boxDecorationBreak': null,'boxShadow': null,'boxSizing': null,'breakAfter': null,'breakBefore': null,'breakInside': null,'captionSide': null,'caretColor': null,'@charset': null,'clear'     : null,'clip'      : null,'color' : null,'columnCount': null,'columnFill': null,'columnGap': null,'columnRule': null,'columnRuleColor': null,'columnRuleStyle': null,'columnRuleWidth': null,'columnSpan': null,'columnWidth': null,'columns': null,'content'     : null,'counterIncrement': null,'counterReset': null,'cursor'     : null,'direction': null,'display': null,'emptyCells': null,'filter'   : null,'flex' : null,'flexBasis': null,'flexDirection': null,'flexFlow': null,'flexGrow': null,'flexShrink': null,'flexWrap' : null,'float' : null,'font' : null,'@fontFace': null,'fontFamily': null,'fontFeatureSettings': null,'@fontFeatureValues': null,'fontKerning': null,'fontLanguageOverride': null,'fontSize': null,'fontSizeAdjust': null,'fontStretch': null,'fontStyle': null,'fontSynthesis': null,'fontVariant': null,'fontVariantAlternates': null,'fontVariantCaps': null,'fontVariantEastAsian': null,'fontVariantLigatures': null,'fontVariantNumeric': null,'fontVariantPosition': null,'fontWeight': null,'grid'  : null,'gridArea': null,'gridAutoColumns': null,'gridAutoFlow': null,'gridAutoRows': null,'gridColumn': null,'gridColumnEnd': null,'gridColumnGap': null,'gridColumnStart': null,'gridGap': null,'gridRow': null,'gridRowEnd': null,'gridRowGap': null,'gridRowStart': null,'gridTemplate': null,'gridTemplateAreas': null,'gridTemplateColumns': null,'gridTemplateRows': null,'hangingPunctuation': null,'height': null,'hyphens': null,'imageOrientation': null,'imageRendering': null,'imageResolution': null,'@import': null,'justifyContent': null,'@keyframes': null,'left': null,'letterSpacing': null,'lineBreak': null,'lineHeight': null,'listStyle': null,'listStyleImage': null,'listStylePosition': null,'listStyleType': null,'margin': null,'marginBottom': null,'marginLeft': null,'marginRight': null,'marginTop': null,'maxHeight': null,'maxWidth': null,'@media': null,'minHeight': null,'minWidth': null,'objectFit': null,'objectPosition': null,'opacity': null,'order': null,'orphans': null,'outline': null,'outlineColor': null,'outlineOffset': null,'outlineStyle': null,'outlineWidth': null,'overflowWrap': null,'overflowX': null,'overflowY': null,'padding': null,'paddingBottom': null,'paddingLeft': null,'paddingRight': null,'paddingTop': null,'pageBreakAfter': null,'pageBreakBefore': null,'pageBreakInside': null,'perspective': null,'perspectiveOrigin': null,'pointerEvents': null,'position': null,'quotes': null,'resize': null,'right': null,'tabSize': null,'tableLayout': null,'textAlign': null,'textAlignLast': null,'textCombineUpright': null,'textDecoration': null,'textDecorationColor': null,'textDecorationLine': null,'textDecorationStyle': null,'textIndent': null,'textJustify': null,'textOrientation': null,'textOverflow': null,'textShadow': null,'textTransform': null,'textUnderlinePosition': null,'top': null,'transform': null,'transformOrigin': null,'transformStyle': null,'transition': null,'transitionDelay': null,'transitionDuration': null,'transitionProperty': null,'transitionTimingFunction': null,'unicodeBidi': null,'userSelect': null,'verticalAlign': null,'visibility': null,'whiteSpace': null,'widows': null,'width': null,'wordBreak': null,'wordSpacing': null,'wordWrap': null,'writingMode': null,'zIndex': null}
const html_attributes       = { 'accept'     : null, 'acceptCharset': null, 'accesskey': null, 'action': null, 'align'   : null, 'alt'          : null, 'async'            : null, 'autocapitalize'  : null, 'autocomplete'    : null, 'autofocus'             : null, 'autoplay'    : null, 'bgcolor'          : null, 'border'                : null, 'buffered'         : null, 'challenge': null, 'charset'            : null, 'checked'           : null, 'cite'         : null, 'class'         : null, 'code'          : null, 'codebase'       : null, 'color'            : null, 'cols'           : null, 'colspan'      : null, 'content': null, 'contenteditable': null, 'contextmenu'     : null, 'controls'             : null, 'coords'                : null, 'crossorigin'     : null, 'data'            : null, 'data*'        : null, 'datetime'  : null, 'default'   : null, 'defer'           : null, 'dir'             : null, 'dirname'        : null, 'disabled'        : null, 'download'       : null, 'draggable': null, 'dropzone'      : null, 'enctype'       : null, 'for'           : null, 'form'       : null, 'formaction': null, 'headers'        : null, 'height'         : null, 'hidden'         : null, 'high'        : null, 'href'      : null, 'hreflang': null, 'httpEquiv'    : null, 'icon'              : null, 'id'                 : null, 'integrity'    : null, 'ismap'        : null, 'itemprop'  : null, 'keytype': null, 'kind'             : null, 'label'   : null, 'lang'    : null, 'language' : null, 'list'      : null, 'loop'      : null, 'low'       : null, 'manifest' : null, 'max'    : null, 'maxlength': null, 'minlength': null, 'media': null, 'method'    : null, 'min'      : null, 'multiple': null, 'muted'    : null, 'name'          : null, 'novalidate'    : null, 'open'          : null, 'optimum'  : null, 'pattern'   : null, 'ping'  : null, 'placeholder': null, 'poster'         : null, 'preload'    : null, 'radiogroup': null, 'readonly': null, 'rel'   : null, 'required' : null, 'reversed': null, 'rows': null, 'rowspan' : null, 'sandbox'     : null, 'scope'  : null, 'scoped' : null, 'seamless' : null, 'selected': null, 'shape': null, 'size': null, 'sizes'   : null, 'slot'     : null, 'span'              : null, 'spellcheck'       : null, 'src'       : null, 'srcdoc'             : null, 'srclang': null, 'srcset'       : null, 'start'     : null, 'step'    : null, 'style'       : null, 'summary'   : null, 'tabindex'            : null, 'target'        : null, 'title'              : null, 'translate'          : null, 'type'             : null, 'usemap'            : null, 'value'    : null, 'width': null, 'wrap'   : null }
const css_overlap           = {"border"      : null, "color"        : null, "content"  : null, "height": null, "width"   : null}
const html_tag_with_overlap = {img           : null, canvas         : null, embed      : null, iframe  : null, input     : null, object         : null, video              : null, meta              : null, basefont          : null, font                    : null, hr            : null, img                : null, object                  : null, table              : null } 
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
                        output_[each_key] = attributes[each_key]
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
function Center(element)
    {
        SetStyle(element,{position:"absolute", top:"50%",left:"50%",transform:"translate(-50%,-50%)"})
        return element
    }
function VerticallyCenterChildrenOf(element)
    {
        element.classList.add('valign-wrapper')
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
        constructor(element) 
            { 
                this.__MainNode = element 
            }
        add(element)
            {
                console.log(`calling SimpleElement add`)
                this.__MainNode.add(element)
                return this.__MainNode
            }
        get outerMostNode()
            {
                return this.__MainNode
            }
        get asElem() { return this.__MainNode }
        // html properties
            get accept()                 { return this.__MainNode.accept             } set accept                   (value_) { this.__MainNode.accept          = value_ }
            get acceptCharset()          { return this.__MainNode.acceptCharset      } set acceptCharset            (value_) { this.__MainNode.acceptCharset   = value_ }
            get accesskey()              { return this.__MainNode.accesskey          } set accesskey                (value_) { this.__MainNode.accesskey       = value_ }
            get action()                 { return this.__MainNode.action             } set action                   (value_) { this.__MainNode.action          = value_ }
            get align()                  { return this.__MainNode.align              } set align                    (value_) { this.__MainNode.align           = value_ }
            get alt()                    { return this.__MainNode.alt                } set alt                      (value_) { this.__MainNode.alt             = value_ }
            get async()                  { return this.__MainNode.async              } set async                    (value_) { this.__MainNode.async           = value_ }
            get autocapitalize()         { return this.__MainNode.autocapitalize     } set autocapitalize           (value_) { this.__MainNode.autocapitalize  = value_ }
            get autocomplete()           { return this.__MainNode.autocomplete       } set autocomplete             (value_) { this.__MainNode.autocomplete    = value_ }
            get autofocus()              { return this.__MainNode.autofocus          } set autofocus                (value_) { this.__MainNode.autofocus       = value_ }
            get autoplay()               { return this.__MainNode.autoplay           } set autoplay                 (value_) { this.__MainNode.autoplay        = value_ }
            get bgcolor()                { return this.__MainNode.bgcolor            } set bgcolor                  (value_) { this.__MainNode.bgcolor         = value_ }
            get buffered()               { return this.__MainNode.buffered           } set buffered                 (value_) { this.__MainNode.buffered        = value_ }
            get challenge()              { return this.__MainNode.challenge          } set challenge                (value_) { this.__MainNode.challenge       = value_ }
            get charset()                { return this.__MainNode.charset            } set charset                  (value_) { this.__MainNode.charset         = value_ }
            get checked()                { return this.__MainNode.checked            } set checked                  (value_) { this.__MainNode.checked         = value_ }
            get cite()                   { return this.__MainNode.cite               } set cite                     (value_) { this.__MainNode.cite            = value_ }
            get class()                  { return this.__MainNode.class              } set class                    (value_) { this.__MainNode.class           = value_ }
            get code()                   { return this.__MainNode.code               } set code                     (value_) { this.__MainNode.code            = value_ }
            get codebase()               { return this.__MainNode.codebase           } set codebase                 (value_) { this.__MainNode.codebase        = value_ }
            get cols()                   { return this.__MainNode.cols               } set cols                     (value_) { this.__MainNode.cols            = value_ }
            get colspan()                { return this.__MainNode.colspan            } set colspan                  (value_) { this.__MainNode.colspan         = value_ }
            get contenteditable()        { return this.__MainNode.contenteditable    } set contenteditable          (value_) { this.__MainNode.contenteditable = value_ }
            get contextmenu()            { return this.__MainNode.contextmenu        } set contextmenu              (value_) { this.__MainNode.contextmenu     = value_ }
            get controls()               { return this.__MainNode.controls           } set controls                 (value_) { this.__MainNode.controls        = value_ }
            get coords()                 { return this.__MainNode.coords             } set coords                   (value_) { this.__MainNode.coords          = value_ }
            get crossorigin()            { return this.__MainNode.crossorigin        } set crossorigin              (value_) { this.__MainNode.crossorigin     = value_ }
            get data()                   { return this.__MainNode.data               } set data                     (value_) { this.__MainNode.data            = value_ }
            get data()                   { return this.__MainNode.data               } set data                     (value_) { this.__MainNode.data            = value_ }
            get datetime()               { return this.__MainNode.datetime           } set datetime                 (value_) { this.__MainNode.datetime        = value_ }
            get default()                { return this.__MainNode.default            } set default                  (value_) { this.__MainNode.default         = value_ }
            get defer()                  { return this.__MainNode.defer              } set defer                    (value_) { this.__MainNode.defer           = value_ }
            get dir()                    { return this.__MainNode.dir                } set dir                      (value_) { this.__MainNode.dir             = value_ }
            get dirname()                { return this.__MainNode.dirname            } set dirname                  (value_) { this.__MainNode.dirname         = value_ }
            get disabled()               { return this.__MainNode.disabled           } set disabled                 (value_) { this.__MainNode.disabled        = value_ }
            get download()               { return this.__MainNode.download           } set download                 (value_) { this.__MainNode.download        = value_ }
            get draggable()              { return this.__MainNode.draggable          } set draggable                (value_) { this.__MainNode.draggable       = value_ }
            get dropzone()               { return this.__MainNode.dropzone           } set dropzone                 (value_) { this.__MainNode.dropzone        = value_ }
            get enctype()                { return this.__MainNode.enctype            } set enctype                  (value_) { this.__MainNode.enctype         = value_ }
            get for()                    { return this.__MainNode.for                } set for                      (value_) { this.__MainNode.for             = value_ }
            get form()                   { return this.__MainNode.form               } set form                     (value_) { this.__MainNode.form            = value_ }
            get formaction()             { return this.__MainNode.formaction         } set formaction               (value_) { this.__MainNode.formaction      = value_ }
            get headers()                { return this.__MainNode.headers            } set headers                  (value_) { this.__MainNode.headers         = value_ }
            get hidden()                 { return this.__MainNode.hidden             } set hidden                   (value_) { this.__MainNode.hidden          = value_ }
            get high()                   { return this.__MainNode.high               } set high                     (value_) { this.__MainNode.high            = value_ }
            get href()                   { return this.__MainNode.href               } set href                     (value_) { this.__MainNode.href            = value_ }
            get hreflang()               { return this.__MainNode.hreflang           } set hreflang                 (value_) { this.__MainNode.hreflang        = value_ }
            get httpEquiv()              { return this.__MainNode.httpEquiv          } set httpEquiv                (value_) { this.__MainNode.httpEquiv       = value_ }
            get icon()                   { return this.__MainNode.icon               } set icon                     (value_) { this.__MainNode.icon            = value_ }
            get id()                     { return this.__MainNode.id                 } set id                       (value_) { this.__MainNode.id              = value_ }
            get integrity()              { return this.__MainNode.integrity          } set integrity                (value_) { this.__MainNode.integrity       = value_ }
            get ismap()                  { return this.__MainNode.ismap              } set ismap                    (value_) { this.__MainNode.ismap           = value_ }
            get itemprop()               { return this.__MainNode.itemprop           } set itemprop                 (value_) { this.__MainNode.itemprop        = value_ }
            get keytype()                { return this.__MainNode.keytype            } set keytype                  (value_) { this.__MainNode.keytype         = value_ }
            get kind()                   { return this.__MainNode.kind               } set kind                     (value_) { this.__MainNode.kind            = value_ }
            get label()                  { return this.__MainNode.label              } set label                    (value_) { this.__MainNode.label           = value_ }
            get lang()                   { return this.__MainNode.lang               } set lang                     (value_) { this.__MainNode.lang            = value_ }
            get language()               { return this.__MainNode.language           } set language                 (value_) { this.__MainNode.language        = value_ }
            get list()                   { return this.__MainNode.list               } set list                     (value_) { this.__MainNode.list            = value_ }
            get loop()                   { return this.__MainNode.loop               } set loop                     (value_) { this.__MainNode.loop            = value_ }
            get low()                    { return this.__MainNode.low                } set low                      (value_) { this.__MainNode.low             = value_ }
            get manifest()               { return this.__MainNode.manifest           } set manifest                 (value_) { this.__MainNode.manifest        = value_ }
            get max()                    { return this.__MainNode.max                } set max                      (value_) { this.__MainNode.max             = value_ }
            get maxlength()              { return this.__MainNode.maxlength          } set maxlength                (value_) { this.__MainNode.maxlength       = value_ }
            get minlength()              { return this.__MainNode.minlength          } set minlength                (value_) { this.__MainNode.minlength       = value_ }
            get media()                  { return this.__MainNode.media              } set media                    (value_) { this.__MainNode.media           = value_ }
            get method()                 { return this.__MainNode.method             } set method                   (value_) { this.__MainNode.method          = value_ }
            get min()                    { return this.__MainNode.min                } set min                      (value_) { this.__MainNode.min             = value_ }
            get multiple()               { return this.__MainNode.multiple           } set multiple                 (value_) { this.__MainNode.multiple        = value_ }
            get muted()                  { return this.__MainNode.muted              } set muted                    (value_) { this.__MainNode.muted           = value_ }
            get name()                   { return this.__MainNode.name               } set name                     (value_) { this.__MainNode.name            = value_ }
            get novalidate()             { return this.__MainNode.novalidate         } set novalidate               (value_) { this.__MainNode.novalidate      = value_ }
            get open()                   { return this.__MainNode.open               } set open                     (value_) { this.__MainNode.open            = value_ }
            get optimum()                { return this.__MainNode.optimum            } set optimum                  (value_) { this.__MainNode.optimum         = value_ }
            get pattern()                { return this.__MainNode.pattern            } set pattern                  (value_) { this.__MainNode.pattern         = value_ }
            get ping()                   { return this.__MainNode.ping               } set ping                     (value_) { this.__MainNode.ping            = value_ }
            get placeholder()            { return this.__MainNode.placeholder        } set placeholder              (value_) { this.__MainNode.placeholder     = value_ }
            get poster()                 { return this.__MainNode.poster             } set poster                   (value_) { this.__MainNode.poster          = value_ }
            get preload()                { return this.__MainNode.preload            } set preload                  (value_) { this.__MainNode.preload         = value_ }
            get radiogroup()             { return this.__MainNode.radiogroup         } set radiogroup               (value_) { this.__MainNode.radiogroup      = value_ }
            get readonly()               { return this.__MainNode.readonly           } set readonly                 (value_) { this.__MainNode.readonly        = value_ }
            get rel()                    { return this.__MainNode.rel                } set rel                      (value_) { this.__MainNode.rel             = value_ }
            get required()               { return this.__MainNode.required           } set required                 (value_) { this.__MainNode.required        = value_ }
            get reversed()               { return this.__MainNode.reversed           } set reversed                 (value_) { this.__MainNode.reversed        = value_ }
            get rows()                   { return this.__MainNode.rows               } set rows                     (value_) { this.__MainNode.rows            = value_ }
            get rowspan()                { return this.__MainNode.rowspan            } set rowspan                  (value_) { this.__MainNode.rowspan         = value_ }
            get sandbox()                { return this.__MainNode.sandbox            } set sandbox                  (value_) { this.__MainNode.sandbox         = value_ }
            get scope()                  { return this.__MainNode.scope              } set scope                    (value_) { this.__MainNode.scope           = value_ }
            get scoped()                 { return this.__MainNode.scoped             } set scoped                   (value_) { this.__MainNode.scoped          = value_ }
            get seamless()               { return this.__MainNode.seamless           } set seamless                 (value_) { this.__MainNode.seamless        = value_ }
            get selected()               { return this.__MainNode.selected           } set selected                 (value_) { this.__MainNode.selected        = value_ }
            get shape()                  { return this.__MainNode.shape              } set shape                    (value_) { this.__MainNode.shape           = value_ }
            get size()                   { return this.__MainNode.size               } set size                     (value_) { this.__MainNode.size            = value_ }
            get sizes()                  { return this.__MainNode.sizes              } set sizes                    (value_) { this.__MainNode.sizes           = value_ }
            get slot()                   { return this.__MainNode.slot               } set slot                     (value_) { this.__MainNode.slot            = value_ }
            get span()                   { return this.__MainNode.span               } set span                     (value_) { this.__MainNode.span            = value_ }
            get spellcheck()             { return this.__MainNode.spellcheck         } set spellcheck               (value_) { this.__MainNode.spellcheck      = value_ }
            get src()                    { return this.__MainNode.src                } set src                      (value_) { this.__MainNode.src             = value_ }
            get srcdoc()                 { return this.__MainNode.srcdoc             } set srcdoc                   (value_) { this.__MainNode.srcdoc          = value_ }
            get srclang()                { return this.__MainNode.srclang            } set srclang                  (value_) { this.__MainNode.srclang         = value_ }
            get srcset()                 { return this.__MainNode.srcset             } set srcset                   (value_) { this.__MainNode.srcset          = value_ }
            get start()                  { return this.__MainNode.start              } set start                    (value_) { this.__MainNode.start           = value_ }
            get step()                   { return this.__MainNode.step               } set step                     (value_) { this.__MainNode.step            = value_ }
            get style()                  { return this.__MainNode.style              } set style                    (value_) { this.__MainNode.style           = value_ }
            get summary()                { return this.__MainNode.summary            } set summary                  (value_) { this.__MainNode.summary         = value_ }
            get tabindex()               { return this.__MainNode.tabindex           } set tabindex                 (value_) { this.__MainNode.tabindex        = value_ }
            get target()                 { return this.__MainNode.target             } set target                   (value_) { this.__MainNode.target          = value_ }
            get title()                  { return this.__MainNode.title              } set title                    (value_) { this.__MainNode.title           = value_ }
            get translate()              { return this.__MainNode.translate          } set translate                (value_) { this.__MainNode.translate       = value_ }
            get type()                   { return this.__MainNode.type               } set type                     (value_) { this.__MainNode.type            = value_ }
            get usemap()                 { return this.__MainNode.usemap             } set usemap                   (value_) { this.__MainNode.usemap          = value_ }
            get value()                  { return this.__MainNode.value              } set value                    (value_) { this.__MainNode.value           = value_ }
            get wrap()                   { return this.__MainNode.wrap               } set wrap                     (value_) { this.__MainNode.wrap            = value_ }
        // css properties
            get alignContent                    () { return this.__MainNode.style.alignContent                     } set alignContent                    (value_) { this.__MainNode.style.alignContent                    = value_ }
            get alignItems                      () { return this.__MainNode.style.alignItems                       } set alignItems                      (value_) { this.__MainNode.style.alignItems                      = value_ }
            get alignSelf                       () { return this.__MainNode.style.alignSelf                        } set alignSelf                       (value_) { this.__MainNode.style.alignSelf                       = value_ }
            get all                             () { return this.__MainNode.style.all                              } set all                             (value_) { this.__MainNode.style.all                             = value_ }
            get animation                       () { return this.__MainNode.style.animation                        } set animation                       (value_) { this.__MainNode.style.animation                       = value_ }
            get animationDelay                  () { return this.__MainNode.style.animationDelay                   } set animationDelay                  (value_) { this.__MainNode.style.animationDelay                  = value_ }
            get animationDirection              () { return this.__MainNode.style.animationDirection               } set animationDirection              (value_) { this.__MainNode.style.animationDirection              = value_ }
            get animationDuration               () { return this.__MainNode.style.animationDuration                } set animationDuration               (value_) { this.__MainNode.style.animationDuration               = value_ }
            get animationFillMode               () { return this.__MainNode.style.animationFillMode                } set animationFillMode               (value_) { this.__MainNode.style.animationFillMode               = value_ }
            get animationIterationCount         () { return this.__MainNode.style.animationIterationCount          } set animationIterationCount         (value_) { this.__MainNode.style.animationIterationCount         = value_ }
            get animationName                   () { return this.__MainNode.style.animationName                    } set animationName                   (value_) { this.__MainNode.style.animationName                   = value_ }
            get animationPlayState              () { return this.__MainNode.style.animationPlayState               } set animationPlayState              (value_) { this.__MainNode.style.animationPlayState              = value_ }
            get animationTimingFunction         () { return this.__MainNode.style.animationTimingFunction          } set animationTimingFunction         (value_) { this.__MainNode.style.animationTimingFunction         = value_ }
            get backfaceVisibility              () { return this.__MainNode.style.backfaceVisibility               } set backfaceVisibility              (value_) { this.__MainNode.style.backfaceVisibility              = value_ }
            get background                      () { return this.__MainNode.style.background                       } set background                      (value_) { this.__MainNode.style.background                      = value_ }
            get backgroundAttachment            () { return this.__MainNode.style.backgroundAttachment             } set backgroundAttachment            (value_) { this.__MainNode.style.backgroundAttachment            = value_ }
            get backgroundBlendMode             () { return this.__MainNode.style.backgroundBlendMode              } set backgroundBlendMode             (value_) { this.__MainNode.style.backgroundBlendMode             = value_ }
            get backgroundClip                  () { return this.__MainNode.style.backgroundClip                   } set backgroundClip                  (value_) { this.__MainNode.style.backgroundClip                  = value_ }
            get backgroundColor                 () { return this.__MainNode.style.backgroundColor                  } set backgroundColor                 (value_) { this.__MainNode.style.backgroundColor                 = value_ }
            get backgroundImage                 () { return this.__MainNode.style.backgroundImage                  } set backgroundImage                 (value_) { this.__MainNode.style.backgroundImage                 = value_ }
            get backgroundOrigin                () { return this.__MainNode.style.backgroundOrigin                 } set backgroundOrigin                (value_) { this.__MainNode.style.backgroundOrigin                = value_ }
            get backgroundPosition              () { return this.__MainNode.style.backgroundPosition               } set backgroundPosition              (value_) { this.__MainNode.style.backgroundPosition              = value_ }
            get backgroundRepeat                () { return this.__MainNode.style.backgroundRepeat                 } set backgroundRepeat                (value_) { this.__MainNode.style.backgroundRepeat                = value_ }
            get backgroundSize                  () { return this.__MainNode.style.backgroundSize                   } set backgroundSize                  (value_) { this.__MainNode.style.backgroundSize                  = value_ }
            get border                          () { return this.__MainNode.style.border                           } set border                          (value_) { this.__MainNode.style.border                          = value_ }
            get borderBottom                    () { return this.__MainNode.style.borderBottom                     } set borderBottom                    (value_) { this.__MainNode.style.borderBottom                    = value_ }
            get borderBottomColor               () { return this.__MainNode.style.borderBottomColor                } set borderBottomColor               (value_) { this.__MainNode.style.borderBottomColor               = value_ }
            get borderBottomLeftRadius          () { return this.__MainNode.style.borderBottomLeftRadius           } set borderBottomLeftRadius          (value_) { this.__MainNode.style.borderBottomLeftRadius          = value_ }
            get borderBottomRightRadius         () { return this.__MainNode.style.borderBottomRightRadius          } set borderBottomRightRadius         (value_) { this.__MainNode.style.borderBottomRightRadius         = value_ }
            get borderBottomStyle               () { return this.__MainNode.style.borderBottomStyle                } set borderBottomStyle               (value_) { this.__MainNode.style.borderBottomStyle               = value_ }
            get borderBottomWidth               () { return this.__MainNode.style.borderBottomWidth                } set borderBottomWidth               (value_) { this.__MainNode.style.borderBottomWidth               = value_ }
            get borderCollapse                  () { return this.__MainNode.style.borderCollapse                   } set borderCollapse                  (value_) { this.__MainNode.style.borderCollapse                  = value_ }
            get borderColor                     () { return this.__MainNode.style.borderColor                      } set borderColor                     (value_) { this.__MainNode.style.borderColor                     = value_ }
            get borderImage                     () { return this.__MainNode.style.borderImage                      } set borderImage                     (value_) { this.__MainNode.style.borderImage                     = value_ }
            get borderImageOutset               () { return this.__MainNode.style.borderImageOutset                } set borderImageOutset               (value_) { this.__MainNode.style.borderImageOutset               = value_ }
            get borderImageRepeat               () { return this.__MainNode.style.borderImageRepeat                } set borderImageRepeat               (value_) { this.__MainNode.style.borderImageRepeat               = value_ }
            get borderImageSlice                () { return this.__MainNode.style.borderImageSlice                 } set borderImageSlice                (value_) { this.__MainNode.style.borderImageSlice                = value_ }
            get borderImageSource               () { return this.__MainNode.style.borderImageSource                } set borderImageSource               (value_) { this.__MainNode.style.borderImageSource               = value_ }
            get borderImageWidth                () { return this.__MainNode.style.borderImageWidth                 } set borderImageWidth                (value_) { this.__MainNode.style.borderImageWidth                = value_ }
            get borderLeft                      () { return this.__MainNode.style.borderLeft                       } set borderLeft                      (value_) { this.__MainNode.style.borderLeft                      = value_ }
            get borderLeftColor                 () { return this.__MainNode.style.borderLeftColor                  } set borderLeftColor                 (value_) { this.__MainNode.style.borderLeftColor                 = value_ }
            get borderLeftStyle                 () { return this.__MainNode.style.borderLeftStyle                  } set borderLeftStyle                 (value_) { this.__MainNode.style.borderLeftStyle                 = value_ }
            get borderLeftWidth                 () { return this.__MainNode.style.borderLeftWidth                  } set borderLeftWidth                 (value_) { this.__MainNode.style.borderLeftWidth                 = value_ }
            get borderRadius                    () { return this.__MainNode.style.borderRadius                     } set borderRadius                    (value_) { this.__MainNode.style.borderRadius                    = value_ }
            get borderRight                     () { return this.__MainNode.style.borderRight                      } set borderRight                     (value_) { this.__MainNode.style.borderRight                     = value_ }
            get borderRightColor                () { return this.__MainNode.style.borderRightColor                 } set borderRightColor                (value_) { this.__MainNode.style.borderRightColor                = value_ }
            get borderRightStyle                () { return this.__MainNode.style.borderRightStyle                 } set borderRightStyle                (value_) { this.__MainNode.style.borderRightStyle                = value_ }
            get borderRightWidth                () { return this.__MainNode.style.borderRightWidth                 } set borderRightWidth                (value_) { this.__MainNode.style.borderRightWidth                = value_ }
            get borderSpacing                   () { return this.__MainNode.style.borderSpacing                    } set borderSpacing                   (value_) { this.__MainNode.style.borderSpacing                   = value_ }
            get borderStyle                     () { return this.__MainNode.style.borderStyle                      } set borderStyle                     (value_) { this.__MainNode.style.borderStyle                     = value_ }
            get borderTop                       () { return this.__MainNode.style.borderTop                        } set borderTop                       (value_) { this.__MainNode.style.borderTop                       = value_ }
            get borderTopColor                  () { return this.__MainNode.style.borderTopColor                   } set borderTopColor                  (value_) { this.__MainNode.style.borderTopColor                  = value_ }
            get borderTopLeftRadius             () { return this.__MainNode.style.borderTopLeftRadius              } set borderTopLeftRadius             (value_) { this.__MainNode.style.borderTopLeftRadius             = value_ }
            get borderTopRightRadius            () { return this.__MainNode.style.borderTopRightRadius             } set borderTopRightRadius            (value_) { this.__MainNode.style.borderTopRightRadius            = value_ }
            get borderTopStyle                  () { return this.__MainNode.style.borderTopStyle                   } set borderTopStyle                  (value_) { this.__MainNode.style.borderTopStyle                  = value_ }
            get borderTopWidth                  () { return this.__MainNode.style.borderTopWidth                   } set borderTopWidth                  (value_) { this.__MainNode.style.borderTopWidth                  = value_ }
            get borderWidth                     () { return this.__MainNode.style.borderWidth                      } set borderWidth                     (value_) { this.__MainNode.style.borderWidth                     = value_ }
            get bottom                          () { return this.__MainNode.style.bottom                           } set bottom                          (value_) { this.__MainNode.style.bottom                          = value_ }
            get boxDecorationBreak              () { return this.__MainNode.style.boxDecorationBreak               } set boxDecorationBreak              (value_) { this.__MainNode.style.boxDecorationBreak              = value_ }
            get boxShadow                       () { return this.__MainNode.style.boxShadow                        } set boxShadow                       (value_) { this.__MainNode.style.boxShadow                       = value_ }
            get boxSizing                       () { return this.__MainNode.style.boxSizing                        } set boxSizing                       (value_) { this.__MainNode.style.boxSizing                       = value_ }
            get breakAfter                      () { return this.__MainNode.style.breakAfter                       } set breakAfter                      (value_) { this.__MainNode.style.breakAfter                      = value_ }
            get breakBefore                     () { return this.__MainNode.style.breakBefore                      } set breakBefore                     (value_) { this.__MainNode.style.breakBefore                     = value_ }
            get breakInside                     () { return this.__MainNode.style.breakInside                      } set breakInside                     (value_) { this.__MainNode.style.breakInside                     = value_ }
            get captionSide                     () { return this.__MainNode.style.captionSide                      } set captionSide                     (value_) { this.__MainNode.style.captionSide                     = value_ }
            get caretColor                      () { return this.__MainNode.style.caretColor                       } set caretColor                      (value_) { this.__MainNode.style.caretColor                      = value_ }
            get Atcharset                       () { return this.__MainNode.style.Atcharset                        } set Atcharset                       (value_) { this.__MainNode.style.Atcharset                       = value_ }
            get clear                           () { return this.__MainNode.style.clear                            } set clear                           (value_) { this.__MainNode.style.clear                           = value_ }
            get clip                            () { return this.__MainNode.style.clip                             } set clip                            (value_) { this.__MainNode.style.clip                            = value_ }
            get color                           () { return this.__MainNode.style.color                            } set color                           (value_) { this.__MainNode.style.color                           = value_ }
            get columnCount                     () { return this.__MainNode.style.columnCount                      } set columnCount                     (value_) { this.__MainNode.style.columnCount                     = value_ }
            get columnFill                      () { return this.__MainNode.style.columnFill                       } set columnFill                      (value_) { this.__MainNode.style.columnFill                      = value_ }
            get columnGap                       () { return this.__MainNode.style.columnGap                        } set columnGap                       (value_) { this.__MainNode.style.columnGap                       = value_ }
            get columnRule                      () { return this.__MainNode.style.columnRule                       } set columnRule                      (value_) { this.__MainNode.style.columnRule                      = value_ }
            get columnRuleColor                 () { return this.__MainNode.style.columnRuleColor                  } set columnRuleColor                 (value_) { this.__MainNode.style.columnRuleColor                 = value_ }
            get columnRuleStyle                 () { return this.__MainNode.style.columnRuleStyle                  } set columnRuleStyle                 (value_) { this.__MainNode.style.columnRuleStyle                 = value_ }
            get columnRuleWidth                 () { return this.__MainNode.style.columnRuleWidth                  } set columnRuleWidth                 (value_) { this.__MainNode.style.columnRuleWidth                 = value_ }
            get columnSpan                      () { return this.__MainNode.style.columnSpan                       } set columnSpan                      (value_) { this.__MainNode.style.columnSpan                      = value_ }
            get columnWidth                     () { return this.__MainNode.style.columnWidth                      } set columnWidth                     (value_) { this.__MainNode.style.columnWidth                     = value_ }
            get columns                         () { return this.__MainNode.style.columns                          } set columns                         (value_) { this.__MainNode.style.columns                         = value_ }
            get content                         () { return this.__MainNode.style.content                          } set content                         (value_) { this.__MainNode.style.content                         = value_ }
            get counterIncrement                () { return this.__MainNode.style.counterIncrement                 } set counterIncrement                (value_) { this.__MainNode.style.counterIncrement                = value_ }
            get counterReset                    () { return this.__MainNode.style.counterReset                     } set counterReset                    (value_) { this.__MainNode.style.counterReset                    = value_ }
            get cursor                          () { return this.__MainNode.style.cursor                           } set cursor                          (value_) { this.__MainNode.style.cursor                          = value_ }
            get direction                       () { return this.__MainNode.style.direction                        } set direction                       (value_) { this.__MainNode.style.direction                       = value_ }
            get display                         () { return this.__MainNode.style.display                          } set display                         (value_) { this.__MainNode.style.display                         = value_ }
            get emptyCells                      () { return this.__MainNode.style.emptyCells                       } set emptyCells                      (value_) { this.__MainNode.style.emptyCells                      = value_ }
            get filter                          () { return this.__MainNode.style.filter                           } set filter                          (value_) { this.__MainNode.style.filter                          = value_ }
            get flex                            () { return this.__MainNode.style.flex                             } set flex                            (value_) { this.__MainNode.style.flex                            = value_ }
            get flexBasis                       () { return this.__MainNode.style.flexBasis                        } set flexBasis                       (value_) { this.__MainNode.style.flexBasis                       = value_ }
            get flexDirection                   () { return this.__MainNode.style.flexDirection                    } set flexDirection                   (value_) { this.__MainNode.style.flexDirection                   = value_ }
            get flexFlow                        () { return this.__MainNode.style.flexFlow                         } set flexFlow                        (value_) { this.__MainNode.style.flexFlow                        = value_ }
            get flexGrow                        () { return this.__MainNode.style.flexGrow                         } set flexGrow                        (value_) { this.__MainNode.style.flexGrow                        = value_ }
            get flexShrink                      () { return this.__MainNode.style.flexShrink                       } set flexShrink                      (value_) { this.__MainNode.style.flexShrink                      = value_ }
            get flexWrap                        () { return this.__MainNode.style.flexWrap                         } set flexWrap                        (value_) { this.__MainNode.style.flexWrap                        = value_ }
            get float                           () { return this.__MainNode.style.float                            } set float                           (value_) { this.__MainNode.style.float                           = value_ }
            get font                            () { return this.__MainNode.style.font                             } set font                            (value_) { this.__MainNode.style.font                            = value_ }
            get AtfontFace                      () { return this.__MainNode.style.AtfontFace                       } set AtfontFace                      (value_) { this.__MainNode.style.AtfontFace                      = value_ }
            get fontFamily                      () { return this.__MainNode.style.fontFamily                       } set fontFamily                      (value_) { this.__MainNode.style.fontFamily                      = value_ }
            get fontFeatureSettings             () { return this.__MainNode.style.fontFeatureSettings              } set fontFeatureSettings             (value_) { this.__MainNode.style.fontFeatureSettings             = value_ }
            get AtfontFeatureValues             () { return this.__MainNode.style.AtfontFeatureValues              } set AtfontFeatureValues             (value_) { this.__MainNode.style.AtfontFeatureValues             = value_ }
            get fontKerning                     () { return this.__MainNode.style.fontKerning                      } set fontKerning                     (value_) { this.__MainNode.style.fontKerning                     = value_ }
            get fontLanguageOverride            () { return this.__MainNode.style.fontLanguageOverride             } set fontLanguageOverride            (value_) { this.__MainNode.style.fontLanguageOverride            = value_ }
            get fontSize                        () { return this.__MainNode.style.fontSize                         } set fontSize                        (value_) { this.__MainNode.style.fontSize                        = value_ }
            get fontSizeAdjust                  () { return this.__MainNode.style.fontSizeAdjust                   } set fontSizeAdjust                  (value_) { this.__MainNode.style.fontSizeAdjust                  = value_ }
            get fontStretch                     () { return this.__MainNode.style.fontStretch                      } set fontStretch                     (value_) { this.__MainNode.style.fontStretch                     = value_ }
            get fontStyle                       () { return this.__MainNode.style.fontStyle                        } set fontStyle                       (value_) { this.__MainNode.style.fontStyle                       = value_ }
            get fontSynthesis                   () { return this.__MainNode.style.fontSynthesis                    } set fontSynthesis                   (value_) { this.__MainNode.style.fontSynthesis                   = value_ }
            get fontVariant                     () { return this.__MainNode.style.fontVariant                      } set fontVariant                     (value_) { this.__MainNode.style.fontVariant                     = value_ }
            get fontVariantAlternates           () { return this.__MainNode.style.fontVariantAlternates            } set fontVariantAlternates           (value_) { this.__MainNode.style.fontVariantAlternates           = value_ }
            get fontVariantCaps                 () { return this.__MainNode.style.fontVariantCaps                  } set fontVariantCaps                 (value_) { this.__MainNode.style.fontVariantCaps                 = value_ }
            get fontVariantEastAsian            () { return this.__MainNode.style.fontVariantEastAsian             } set fontVariantEastAsian            (value_) { this.__MainNode.style.fontVariantEastAsian            = value_ }
            get fontVariantLigatures            () { return this.__MainNode.style.fontVariantLigatures             } set fontVariantLigatures            (value_) { this.__MainNode.style.fontVariantLigatures            = value_ }
            get fontVariantNumeric              () { return this.__MainNode.style.fontVariantNumeric               } set fontVariantNumeric              (value_) { this.__MainNode.style.fontVariantNumeric              = value_ }
            get fontVariantPosition             () { return this.__MainNode.style.fontVariantPosition              } set fontVariantPosition             (value_) { this.__MainNode.style.fontVariantPosition             = value_ }
            get fontWeight                      () { return this.__MainNode.style.fontWeight                       } set fontWeight                      (value_) { this.__MainNode.style.fontWeight                      = value_ }
            get grid                            () { return this.__MainNode.style.grid                             } set grid                            (value_) { this.__MainNode.style.grid                            = value_ }
            get gridArea                        () { return this.__MainNode.style.gridArea                         } set gridArea                        (value_) { this.__MainNode.style.gridArea                        = value_ }
            get gridAutoColumns                 () { return this.__MainNode.style.gridAutoColumns                  } set gridAutoColumns                 (value_) { this.__MainNode.style.gridAutoColumns                 = value_ }
            get gridAutoFlow                    () { return this.__MainNode.style.gridAutoFlow                     } set gridAutoFlow                    (value_) { this.__MainNode.style.gridAutoFlow                    = value_ }
            get gridAutoRows                    () { return this.__MainNode.style.gridAutoRows                     } set gridAutoRows                    (value_) { this.__MainNode.style.gridAutoRows                    = value_ }
            get gridColumn                      () { return this.__MainNode.style.gridColumn                       } set gridColumn                      (value_) { this.__MainNode.style.gridColumn                      = value_ }
            get gridColumnEnd                   () { return this.__MainNode.style.gridColumnEnd                    } set gridColumnEnd                   (value_) { this.__MainNode.style.gridColumnEnd                   = value_ }
            get gridColumnGap                   () { return this.__MainNode.style.gridColumnGap                    } set gridColumnGap                   (value_) { this.__MainNode.style.gridColumnGap                   = value_ }
            get gridColumnStart                 () { return this.__MainNode.style.gridColumnStart                  } set gridColumnStart                 (value_) { this.__MainNode.style.gridColumnStart                 = value_ }
            get gridGap                         () { return this.__MainNode.style.gridGap                          } set gridGap                         (value_) { this.__MainNode.style.gridGap                         = value_ }
            get gridRow                         () { return this.__MainNode.style.gridRow                          } set gridRow                         (value_) { this.__MainNode.style.gridRow                         = value_ }
            get gridRowEnd                      () { return this.__MainNode.style.gridRowEnd                       } set gridRowEnd                      (value_) { this.__MainNode.style.gridRowEnd                      = value_ }
            get gridRowGap                      () { return this.__MainNode.style.gridRowGap                       } set gridRowGap                      (value_) { this.__MainNode.style.gridRowGap                      = value_ }
            get gridRowStart                    () { return this.__MainNode.style.gridRowStart                     } set gridRowStart                    (value_) { this.__MainNode.style.gridRowStart                    = value_ }
            get gridTemplate                    () { return this.__MainNode.style.gridTemplate                     } set gridTemplate                    (value_) { this.__MainNode.style.gridTemplate                    = value_ }
            get gridTemplateAreas               () { return this.__MainNode.style.gridTemplateAreas                } set gridTemplateAreas               (value_) { this.__MainNode.style.gridTemplateAreas               = value_ }
            get gridTemplateColumns             () { return this.__MainNode.style.gridTemplateColumns              } set gridTemplateColumns             (value_) { this.__MainNode.style.gridTemplateColumns             = value_ }
            get gridTemplateRows                () { return this.__MainNode.style.gridTemplateRows                 } set gridTemplateRows                (value_) { this.__MainNode.style.gridTemplateRows                = value_ }
            get hangingPunctuation              () { return this.__MainNode.style.hangingPunctuation               } set hangingPunctuation              (value_) { this.__MainNode.style.hangingPunctuation              = value_ }
            get height                          () { return this.__MainNode.style.height                           } set height                          (value_) { this.__MainNode.style.height                          = value_ }
            get hyphens                         () { return this.__MainNode.style.hyphens                          } set hyphens                         (value_) { this.__MainNode.style.hyphens                         = value_ }
            get imageOrientation                () { return this.__MainNode.style.imageOrientation                 } set imageOrientation                (value_) { this.__MainNode.style.imageOrientation                = value_ }
            get imageRendering                  () { return this.__MainNode.style.imageRendering                   } set imageRendering                  (value_) { this.__MainNode.style.imageRendering                  = value_ }
            get imageResolution                 () { return this.__MainNode.style.imageResolution                  } set imageResolution                 (value_) { this.__MainNode.style.imageResolution                 = value_ }
            get Atimport                        () { return this.__MainNode.style.Atimport                         } set Atimport                        (value_) { this.__MainNode.style.Atimport                        = value_ }
            get justifyContent                  () { return this.__MainNode.style.justifyContent                   } set justifyContent                  (value_) { this.__MainNode.style.justifyContent                  = value_ }
            get Atkeyframes                     () { return this.__MainNode.style.Atkeyframes                      } set Atkeyframes                     (value_) { this.__MainNode.style.Atkeyframes                     = value_ }
            get left                            () { return this.__MainNode.style.left                             } set left                            (value_) { this.__MainNode.style.left                            = value_ }
            get letterSpacing                   () { return this.__MainNode.style.letterSpacing                    } set letterSpacing                   (value_) { this.__MainNode.style.letterSpacing                   = value_ }
            get lineBreak                       () { return this.__MainNode.style.lineBreak                        } set lineBreak                       (value_) { this.__MainNode.style.lineBreak                       = value_ }
            get lineHeight                      () { return this.__MainNode.style.lineHeight                       } set lineHeight                      (value_) { this.__MainNode.style.lineHeight                      = value_ }
            get listStyle                       () { return this.__MainNode.style.listStyle                        } set listStyle                       (value_) { this.__MainNode.style.listStyle                       = value_ }
            get listStyleImage                  () { return this.__MainNode.style.listStyleImage                   } set listStyleImage                  (value_) { this.__MainNode.style.listStyleImage                  = value_ }
            get listStylePosition               () { return this.__MainNode.style.listStylePosition                } set listStylePosition               (value_) { this.__MainNode.style.listStylePosition               = value_ }
            get listStyleType                   () { return this.__MainNode.style.listStyleType                    } set listStyleType                   (value_) { this.__MainNode.style.listStyleType                   = value_ }
            get margin                          () { return this.__MainNode.style.margin                           } set margin                          (value_) { this.__MainNode.style.margin                          = value_ }
            get marginBottom                    () { return this.__MainNode.style.marginBottom                     } set marginBottom                    (value_) { this.__MainNode.style.marginBottom                    = value_ }
            get marginLeft                      () { return this.__MainNode.style.marginLeft                       } set marginLeft                      (value_) { this.__MainNode.style.marginLeft                      = value_ }
            get marginRight                     () { return this.__MainNode.style.marginRight                      } set marginRight                     (value_) { this.__MainNode.style.marginRight                     = value_ }
            get marginTop                       () { return this.__MainNode.style.marginTop                        } set marginTop                       (value_) { this.__MainNode.style.marginTop                       = value_ }
            get maxHeight                       () { return this.__MainNode.style.maxHeight                        } set maxHeight                       (value_) { this.__MainNode.style.maxHeight                       = value_ }
            get maxWidth                        () { return this.__MainNode.style.maxWidth                         } set maxWidth                        (value_) { this.__MainNode.style.maxWidth                        = value_ }
            get Atmedia                         () { return this.__MainNode.style.Atmedia                          } set Atmedia                         (value_) { this.__MainNode.style.Atmedia                         = value_ }
            get minHeight                       () { return this.__MainNode.style.minHeight                        } set minHeight                       (value_) { this.__MainNode.style.minHeight                       = value_ }
            get minWidth                        () { return this.__MainNode.style.minWidth                         } set minWidth                        (value_) { this.__MainNode.style.minWidth                        = value_ }
            get objectFit                       () { return this.__MainNode.style.objectFit                        } set objectFit                       (value_) { this.__MainNode.style.objectFit                       = value_ }
            get objectPosition                  () { return this.__MainNode.style.objectPosition                   } set objectPosition                  (value_) { this.__MainNode.style.objectPosition                  = value_ }
            get opacity                         () { return this.__MainNode.style.opacity                          } set opacity                         (value_) { this.__MainNode.style.opacity                         = value_ }
            get order                           () { return this.__MainNode.style.order                            } set order                           (value_) { this.__MainNode.style.order                           = value_ }
            get orphans                         () { return this.__MainNode.style.orphans                          } set orphans                         (value_) { this.__MainNode.style.orphans                         = value_ }
            get outline                         () { return this.__MainNode.style.outline                          } set outline                         (value_) { this.__MainNode.style.outline                         = value_ }
            get outlineColor                    () { return this.__MainNode.style.outlineColor                     } set outlineColor                    (value_) { this.__MainNode.style.outlineColor                    = value_ }
            get outlineOffset                   () { return this.__MainNode.style.outlineOffset                    } set outlineOffset                   (value_) { this.__MainNode.style.outlineOffset                   = value_ }
            get outlineStyle                    () { return this.__MainNode.style.outlineStyle                     } set outlineStyle                    (value_) { this.__MainNode.style.outlineStyle                    = value_ }
            get outlineWidth                    () { return this.__MainNode.style.outlineWidth                     } set outlineWidth                    (value_) { this.__MainNode.style.outlineWidth                    = value_ }
            get overflowWrap                    () { return this.__MainNode.style.overflowWrap                     } set overflowWrap                    (value_) { this.__MainNode.style.overflowWrap                    = value_ }
            get overflowX                       () { return this.__MainNode.style.overflowX                        } set overflowX                       (value_) { this.__MainNode.style.overflowX                       = value_ }
            get overflowY                       () { return this.__MainNode.style.overflowY                        } set overflowY                       (value_) { this.__MainNode.style.overflowY                       = value_ }
            get padding                         () { return this.__MainNode.style.padding                          } set padding                         (value_) { this.__MainNode.style.padding                         = value_ }
            get paddingBottom                   () { return this.__MainNode.style.paddingBottom                    } set paddingBottom                   (value_) { this.__MainNode.style.paddingBottom                   = value_ }
            get paddingLeft                     () { return this.__MainNode.style.paddingLeft                      } set paddingLeft                     (value_) { this.__MainNode.style.paddingLeft                     = value_ }
            get paddingRight                    () { return this.__MainNode.style.paddingRight                     } set paddingRight                    (value_) { this.__MainNode.style.paddingRight                    = value_ }
            get paddingTop                      () { return this.__MainNode.style.paddingTop                       } set paddingTop                      (value_) { this.__MainNode.style.paddingTop                      = value_ }
            get pageBreakAfter                  () { return this.__MainNode.style.pageBreakAfter                   } set pageBreakAfter                  (value_) { this.__MainNode.style.pageBreakAfter                  = value_ }
            get pageBreakBefore                 () { return this.__MainNode.style.pageBreakBefore                  } set pageBreakBefore                 (value_) { this.__MainNode.style.pageBreakBefore                 = value_ }
            get pageBreakInside                 () { return this.__MainNode.style.pageBreakInside                  } set pageBreakInside                 (value_) { this.__MainNode.style.pageBreakInside                 = value_ }
            get perspective                     () { return this.__MainNode.style.perspective                      } set perspective                     (value_) { this.__MainNode.style.perspective                     = value_ }
            get perspectiveOrigin               () { return this.__MainNode.style.perspectiveOrigin                } set perspectiveOrigin               (value_) { this.__MainNode.style.perspectiveOrigin               = value_ }
            get pointerEvents                   () { return this.__MainNode.style.pointerEvents                    } set pointerEvents                   (value_) { this.__MainNode.style.pointerEvents                   = value_ }
            get position                        () { return this.__MainNode.style.position                         } set position                        (value_) { this.__MainNode.style.position                        = value_ }
            get quotes                          () { return this.__MainNode.style.quotes                           } set quotes                          (value_) { this.__MainNode.style.quotes                          = value_ }
            get resize                          () { return this.__MainNode.style.resize                           } set resize                          (value_) { this.__MainNode.style.resize                          = value_ }
            get right                           () { return this.__MainNode.style.right                            } set right                           (value_) { this.__MainNode.style.right                           = value_ }
            get tabSize                         () { return this.__MainNode.style.tabSize                          } set tabSize                         (value_) { this.__MainNode.style.tabSize                         = value_ }
            get tableLayout                     () { return this.__MainNode.style.tableLayout                      } set tableLayout                     (value_) { this.__MainNode.style.tableLayout                     = value_ }
            get textAlign                       () { return this.__MainNode.style.textAlign                        } set textAlign                       (value_) { this.__MainNode.style.textAlign                       = value_ }
            get textAlignLast                   () { return this.__MainNode.style.textAlignLast                    } set textAlignLast                   (value_) { this.__MainNode.style.textAlignLast                   = value_ }
            get textCombineUpright              () { return this.__MainNode.style.textCombineUpright               } set textCombineUpright              (value_) { this.__MainNode.style.textCombineUpright              = value_ }
            get textDecoration                  () { return this.__MainNode.style.textDecoration                   } set textDecoration                  (value_) { this.__MainNode.style.textDecoration                  = value_ }
            get textDecorationColor             () { return this.__MainNode.style.textDecorationColor              } set textDecorationColor             (value_) { this.__MainNode.style.textDecorationColor             = value_ }
            get textDecorationLine              () { return this.__MainNode.style.textDecorationLine               } set textDecorationLine              (value_) { this.__MainNode.style.textDecorationLine              = value_ }
            get textDecorationStyle             () { return this.__MainNode.style.textDecorationStyle              } set textDecorationStyle             (value_) { this.__MainNode.style.textDecorationStyle             = value_ }
            get textIndent                      () { return this.__MainNode.style.textIndent                       } set textIndent                      (value_) { this.__MainNode.style.textIndent                      = value_ }
            get textJustify                     () { return this.__MainNode.style.textJustify                      } set textJustify                     (value_) { this.__MainNode.style.textJustify                     = value_ }
            get textOrientation                 () { return this.__MainNode.style.textOrientation                  } set textOrientation                 (value_) { this.__MainNode.style.textOrientation                 = value_ }
            get textOverflow                    () { return this.__MainNode.style.textOverflow                     } set textOverflow                    (value_) { this.__MainNode.style.textOverflow                    = value_ }
            get textShadow                      () { return this.__MainNode.style.textShadow                       } set textShadow                      (value_) { this.__MainNode.style.textShadow                      = value_ }
            get textTransform                   () { return this.__MainNode.style.textTransform                    } set textTransform                   (value_) { this.__MainNode.style.textTransform                   = value_ }
            get textUnderlinePosition           () { return this.__MainNode.style.textUnderlinePosition            } set textUnderlinePosition           (value_) { this.__MainNode.style.textUnderlinePosition           = value_ }
            get top                             () { return this.__MainNode.style.top                              } set top                             (value_) { this.__MainNode.style.top                             = value_ }
            get transform                       () { return this.__MainNode.style.transform                        } set transform                       (value_) { this.__MainNode.style.transform                       = value_ }
            get transformOrigin                 () { return this.__MainNode.style.transformOrigin                  } set transformOrigin                 (value_) { this.__MainNode.style.transformOrigin                 = value_ }
            get transformStyle                  () { return this.__MainNode.style.transformStyle                   } set transformStyle                  (value_) { this.__MainNode.style.transformStyle                  = value_ }
            get transition                      () { return this.__MainNode.style.transition                       } set transition                      (value_) { this.__MainNode.style.transition                      = value_ }
            get transitionDelay                 () { return this.__MainNode.style.transitionDelay                  } set transitionDelay                 (value_) { this.__MainNode.style.transitionDelay                 = value_ }
            get transitionDuration              () { return this.__MainNode.style.transitionDuration               } set transitionDuration              (value_) { this.__MainNode.style.transitionDuration              = value_ }
            get transitionProperty              () { return this.__MainNode.style.transitionProperty               } set transitionProperty              (value_) { this.__MainNode.style.transitionProperty              = value_ }
            get transitionTimingFunction        () { return this.__MainNode.style.transitionTimingFunction         } set transitionTimingFunction        (value_) { this.__MainNode.style.transitionTimingFunction        = value_ }
            get unicodeBidi                     () { return this.__MainNode.style.unicodeBidi                      } set unicodeBidi                     (value_) { this.__MainNode.style.unicodeBidi                     = value_ }
            get userSelect                      () { return this.__MainNode.style.userSelect                       } set userSelect                      (value_) { this.__MainNode.style.userSelect                      = value_ }
            get verticalAlign                   () { return this.__MainNode.style.verticalAlign                    } set verticalAlign                   (value_) { this.__MainNode.style.verticalAlign                   = value_ }
            get visibility                      () { return this.__MainNode.style.visibility                       } set visibility                      (value_) { this.__MainNode.style.visibility                      = value_ }
            get whiteSpace                      () { return this.__MainNode.style.whiteSpace                       } set whiteSpace                      (value_) { this.__MainNode.style.whiteSpace                      = value_ }
            get widows                          () { return this.__MainNode.style.widows                           } set widows                          (value_) { this.__MainNode.style.widows                          = value_ }
            get width                           () { return this.__MainNode.style.width                            } set width                           (value_) { this.__MainNode.style.width                           = value_ }
            get wordBreak                       () { return this.__MainNode.style.wordBreak                        } set wordBreak                       (value_) { this.__MainNode.style.wordBreak                       = value_ }
            get wordSpacing                     () { return this.__MainNode.style.wordSpacing                      } set wordSpacing                     (value_) { this.__MainNode.style.wordSpacing                     = value_ }
            get wordWrap                        () { return this.__MainNode.style.wordWrap                         } set wordWrap                        (value_) { this.__MainNode.style.wordWrap                        = value_ }
            get writingMode                     () { return this.__MainNode.style.writingMode                      } set writingMode                     (value_) { this.__MainNode.style.writingMode                     = value_ }
            get zIndex                          () { return this.__MainNode.style.zIndex                           } set zIndex                          (value_) { this.__MainNode.style.zIndex                          = value_ }
    }
class Container extends SimpleElement
    {
        constructor(element)
            {
                super()
                // create 
                this.__Child    = element
                // this.__Handlee  = New("div", { height: "fit-content", width: "fit-content"  })
                this.__MainNode  = New("div", { height: "100%", width: "100%", display:"flex", position: "relative" })
                // this.__MainNode = New("div", { height: "100%", width: "100%" })
                // attach 
                // this.__Handlee.add(this.__Child)
                // this.__Handler.add(this.__Child)
                this.__MainNode.add(this.__Child)
            
            }
        add(...elements)
            {
                this.__Child.add(...elements)
            }
        // vertical choices
            alignTop()
                {
                    // this.__Handlee.style.top = "0"
                    // this.__Handlee.style.bottom = null
                    this.__MainNode.style.alignItems = "flex-start"
                }
            alignBottom()
                {
                    // this.__Handlee.style.top = null
                    // this.__Handlee.style.bottom = "0"
                    this.__MainNode.style.alignItems = "flex-end"
                }
            centerVertically()
                {
                    // if already centered horizontally
                    this.__MainNode.style.alignItems = "center"
                    // if (this.__Handlee.style.left == "50%")
                    //     {
                    //         this.center()
                    //     }
                    // else
                    //     {
                    //         this.__Handlee.style.top = "50%"
                    //         this.__Handlee.style.bottom = null
                    //         this.__Handlee.style.transform = "translateY(-50%)"
                    //     }
                    
                }
        // horizontal choices
            alignLeft()
                {
                    // this.__Handlee.style.left = "0"
                    // this.__Handlee.style.right = null
                    this.__MainNode.style.justifyContent = "flex-end"
                }
            alignRight()
                {
                    // this.__Handlee.style.left = null
                    // this.__Handlee.style.right = "0"
                    this.__MainNode.style.justifyContent = "flex-start"
                }
            centerHorizontally()
                {
                    // if already centered vertically 
                    this.__MainNode.style.justifyContent = "center"
                    // if (this.__Handlee.style.top == "50%")
                    //     {
                    //         this.center()
                    //     }
                    // else
                    //     {
                    //         this.__Handlee.style.left = "50%"
                    //         this.__Handlee.style.right = null
                    //         this.__Handlee.style.transform = "translateX(-50%)"
                    //     }
                }
        // center both ways
            center()
                {
                    this.__MainNode.style.justifyContent = "center"
                    this.__MainNode.style.alignItems = "center"
                    // this.__Handlee.style.top = "50%"
                    // this.__Handlee.style.bottom = null
                    // this.__Handlee.style.left = "50%"
                    // this.__Handlee.style.right = null
                    // this.__Handlee.style.transform = "translate(-50%,-50%)"
                }
    }
class List extends SimpleElement
    {
        constructor(attributes_) 
            {
                super()
                this.__MainNode = New("div",{className:"List" , style:{display:"grid",gridTemplateColumns:"auto",textAlign:"initial",} })
                SetStyle( this.__MainNode , attributes_ )
                this.__wrapped_list = []
                this.__actual_elem_list = []
                this.__item_alignment = "None"
            }
        set width(value_)
            {
                this.__MainNode.style.width = value_
            }
        get width()
            {
                return this.__MainNode.style.width
            }
        add(element)
            {
                // console.log(`adding element to list!`,element)
                // add a wrapper then add to list and __MainNode
                var wrapper = New("div",{className:"ListItemWrapper", style:{}})
                wrapper.add(element)
                var this_ = this;
                var index_ = this.__actual_elem_list.length - 1
                this.__actual_elem_list.push(element)
                this.__wrapped_list.push(wrapper)
                this.__MainNode.add(wrapper)
                if (this.__item_alignment == "center horizontally")
                    {
                        HorizonallyCenterChildrenOf(wrapper)
                    }
                // set the delete function for the element 
                element.delete = ()=> 
                    {
                        // remove element from array 
                        this_.__actual_elem_list.splice(index_,1)
                        // remove wrapper from array
                        this_.__wrapped_list.splice(index_,1)
                        // delete wrapper
                        wrapper.delete()
                    }
            }
        horizontallyCenter(index)
            {
                HorizonallyCenterChildrenOf(this.__wrapped_list[index])
            }
        at(index)
            {
                return this.__actual_elem_list[index]
            }
        alignEach(alignment_input)
            {
                this.__item_alignment = alignment_input
                if (this.__item_alignment == "center horizontally")
                    {
                        for (var each of this.__wrapped_list)
                            {
                                HorizonallyCenterChildrenOf(each)
                            }
                    }
            }
        get element()
            {
                return this.__MainNode
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
                this.__Wrapper  = New("div", {width:"100%"})
                this.__list = new List({width:"100%"})
                this.__MainNode = New("Input",attributes_)
                this.error_message = New("span",{  innerHTML:"", className:"helper-text", color:"#F44336", marginLeft:"20px",marginTop:"0" })

                // set 
                HorizonallyCenterChildrenOf(this.__Wrapper)
                this.__list.width = "100%"
                if (this.id == "") { this.id = `${Math.random()}` } 
                this.__validator = ()=>{ return {valid: true, error_message:"Invalid" } }
                this.onInvalidOnBlur     = this.defaultOnInvalidOnBlur
                this.onInvalidOnGetValue = this.defaultOnInvalidOnGetValue
                this.__Wrapper.onBlur = function (eventObj)
                    {
                        var error_data = this.__validator(this.__MainNode.value)
                        if (!error_data.valid)
                            {
                                this.onInvalidOnBlur(error_data)
                            }
                        this.onBlur(eventObj)
                    }
                this.__Wrapper.onChange = function()
                    {
                        // remove the invalid cases
                        this.__MainNode.classList.remove("invalid")
                        this.error_message.innerHTML = ""
                    }
                // attach
                this.__list.add(this.__MainNode)
                this.__list.add(this.error_message)
                this.__Wrapper.add(this.__list)

                // set again 
                this.__list.horizontallyCenter(0)
            }
        set width(value_)
            {
                this.__Wrapper.style.width = value_ 
            }
        get width()
            {
                return this.__Wrapper.style.width
            }
        get defaultOnInvalidOnGetValue()
            {
                return function (error_data)
                    {
                        console.log(`onInvalidOnGetValue`)
                        console.log(`error_data is:`,error_data)
                        // add the invalid class
                        this.__MainNode.classList.add("invalid")
                        // if there is an error message, show it
                        this.error_message.innerHTML = error_data.error_message
                    }
            }
        get defaultOnInvalidOnBlur()
            {
                return function (error_data) { this.__MainNode.classList.add("invalid") }
            }
        set label(value_)
            {
                // if the value is a string
                if (typeof value_ == "string")
                    {
                        
                        // if label doesnt exist create it and set the value 
                        if (!('label' in this) || this.label == null) 
                            { 
                                console.log(`no this.label yet`)
                                this.label = New("label",{innerHTML:value_}) 
                                this.__list.add(this.label)
                            }
                        // if label does exist just set the value
                        else 
                            { 
                                console.log(`this.label is:`,this.label)
                                this.label.innerHTML = value_ 
                            }
                        // make sure to set the id
                        this.label.setAttribute('for', this.__MainNode.id)
                    }
                // FIXME, add support for things other than strings
            }
        set id(value_)
            {
                if ('label' in this && this.label != null) 
                    { 
                        this.label.setAttribute('for', this.__MainNode.id)
                    }
                this.__MainNode.id = value_
            }
        get id() 
            { 
                return this.__MainNode.id 
            }
        get value()
            {
                var error_data = this.__validator(this.__MainNode.value)
                if (!error_data.valid)
                    {
                        this.onInvalidOnGetValue(error_data)
                    }
                return this.__MainNode.value
            }
        set validator(value_)
            {
                if (typeof value_ == "function")
                    {
                        this.__validator = value_
                    }
                // FIXME, add regex and string/preset support 
            }
        get validator()
            {
                return this.__validator
            }
        get outerMostNode()
            {
                return this.__Wrapper
            }
    }
class LabeledInput extends SimpleElement
    {
        constructor({label="", placeholder="", type="",})
            {
                super()
                this.__MainNode = New("div")
                HorizonallyCenterChildrenOf(this.__MainNode)
                // create the text 
                this.label = New("div",{innerHTML:label, style:{ fontSize:"16pt", width:"100%", textAlign:"center",marginRight:"10px"}})
                this.___label_wrapper = New("div",{style:{width:"auto"}})
                this.___label_wrapper.add(this.label)
                VerticallyCenterChildrenOf(this.___label_wrapper)
                
                this.input = New("input",{ placeholder, style:{ fontSize:"15pt", width:"100%", margin:0, height:"2rem", textAlign:"left"}})
                if (type.length > 0) { this.input.type = type }
                this.___input_wrapper = New("div",{style:{width:"fill"}})
                this.___input_wrapper.add(this.input)
                VerticallyCenterChildrenOf(this.___input_wrapper)
                
                this.__MainNode.add(this.___label_wrapper)
                this.__MainNode.add(this.___input_wrapper)
            }
        set labelStyle(new_style)
            {
                for(var each of Object.keys(new_style))
                    {
                        this.label.style[each] = new_style[each]
                    }
            }
        labelStyle(new_style)
            {
                for(var each of Object.keys(new_style))
                    {
                        this.label.style[each] = new_style[each]
                    }
            }
        set inputStyle(new_style)
            {
                SetStyle(this.input, new_style)
            }
        inputStyle(new_style)
            {
                SetStyle(this.input, new_style)
            }
        set containerStyle(new_style)
            {
                SetStyle(this.__MainNode, new_style)
            }
        containerStyle(new_style)
            {
                SetStyle(this.__MainNode, new_style)
            }
        set placeholder(input_)
            {
                this.input.style.placeholder = input_ 
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
    

class VerticalList extends SimpleElement
    {
        constructor(...elements)
            {
                super()
                this.__MainNode = New('div')
                this.__Wrappers = []
                for (var each of elements)
                    {
                        var the_wrapper = new Container(each)
                        the_wrapper.width = "100%"
                        this.__Wrappers.push(the_wrapper)
                        this.__MainNode.add(the_wrapper)
                    }
                // by default left align everything 
                this.leftAlignEach()
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
                        each.alignLeft()
                    }
            }
        rightAlignEach()
            {
                this.__Alignment = "right"
                for (var each of this.__Wrappers)
                    {
                        each.alignRight()
                    }
            }
        add(element)
            {
                var the_wrapper = new Container(element)
                if (this.__Alignment == "left")
                    {
                        the_wrapper.alignRight()
                    }
                else if (this.__Alignment == "")
                    {
                        the_wrapper.alignLeft()
                    }
                else
                    {
                        the_wrapper.centerHorizontally()
                    }
                this.__Wrappers.push(the_wrapper)
                this.__MainNode.add(the_wrapper)
            }
    }

// TODO figure out how to support map+img+area