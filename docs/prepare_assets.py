from PIL import Image, ImageFilter, ImageChops
d='dossier/Dossier IMG_Personnage_Logo/'; A='zeno/assets/'
def crop(src,box,out,up=2,mirror=False):
    im=Image.open(d+src).convert('RGB').crop(box)
    im=im.resize((im.width*up,im.height*up),Image.LANCZOS).filter(ImageFilter.UnsharpMask(2,60,3))
    if mirror: im=im.transpose(Image.FLIP_LEFT_RIGHT)
    im.save(A+'characters/'+out,quality=88,method=6)
Z='Fiche de r#U00e9f#U00e9rence du personnage Zeno.png'; M='Personnage Manarii.png'
C='Planche de r#U00e9f#U00e9rence ZENO #U2014 Dirigeant moderne.png'
crop(Z,(1050,64,1440,463),'zeno_haut.webp'); crop(Z,(314,91,502,480),'zeno_3q.webp'); crop(Z,(314,91,502,480),'zeno_3q_mir.webp',mirror=True)
crop(M,(1042,64,1438,463),'manarii_haut.webp')
crop(C,(63,86,316,482),'client_face.webp'); crop(C,(385,92,591,482),'client_3q.webp'); crop(C,(385,92,591,482),'client_3q_mir.webp',mirror=True)
L=A+'logos/'
def lg(src,out,maxw=700):
    im=Image.open(d+src).convert('RGBA'); im.thumbnail((maxw,maxw)); im.save(L+out,optimize=True)
lg('LOGO_ZENO_embleme_seul_transparent.png','zeno.png',900)
for s,o in [('HeyGen_logo.svg.webp','heygen.png'),('Higgfield.png','higgsfield.png'),('Logo SEFI.jpg','sefi.png'),('OpenAi.png','openai.png'),('Tiki Agency logo.png','tiki.png'),('Vercel-Logo.png','vercel.png'),('logo_Tahiti Formation.png','tahiti-formation.png'),('Exotic gardens.jfif','exotic.png'),('logo_D-ID.jfif','did.png'),('Cybertech logo.jfif','cybertech.png'),('synthesia.jfif','synthesia.png'),('Supabase logo.jfif','supabase.png')]: lg(s,o)
for o in ['vercel.png','heygen.png']:
    im=Image.open(L+o); im.crop(im.getchannel('A').getbbox()).save(L+o)
W=Image.new('RGB',(1500,520));x=0
for n in ['zeno_haut','zeno_3q','manarii_haut','client_face','client_3q']:
    t=Image.open(A+'characters/'+n+'.webp');t.thumbnail((300,500));W.paste(t,(x,0));x+=300
W.save('crops_prev.png')
crop(Z,(1300,240,1440,463),'zeno_manche.webp',up=3)
