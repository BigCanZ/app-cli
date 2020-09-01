/**
 * 用户登录账户密码
 * @method post
 * @param {string} cipherText - 必填，服务端公钥加密的密文，内容：accountType、account、password
 * @param {string} clientPublicKey - 必填，客户端公钥，在登录成功的情况下才会存入
 */
export const login = process.env.VUE_APP_BASE_API + '/gobank-getway/user/login'

/**
 * 用户通过手机验证码登录
 * @method post
 * @param {string} cipherText - 必填，验证码密文
 * @param {string} clientPublicKey - 必填，客户端公钥，在登录成功的情况下才会存入
 * @param {string} zone - 必填，区号
 * @param {string} phoneNumeber - 必填，用户手机号码
 */
export const loginSmsCodeUrl = process.env.VUE_APP_BASE_API + '/gobank-getway/user/loginBySmsVerificationCode'
