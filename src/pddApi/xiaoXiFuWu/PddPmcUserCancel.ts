export const PDD_PMC_USER_CANCEL = 'PDD_PMC_USER_CANCEL';

/**
 * 接口名称：取消用户的消息服务
 * 接口标识：pdd.pmc.user.cancel
 * 接口使用场景：取消用户的消息服务
 **/

export interface PddPmcUserCancelRequestInterface {
  /**
   * @description: 用户唯一id
   * @type: string
   * @default:
   **/
  owner_id?: string;
}

/**
 * 接口名称：取消用户的消息服务
 * 接口标识：pdd.pmc.user.cancel
 * 接口使用场景：取消用户的消息服务
 **/

export interface PddPmcUserCancelResponseInterface {
  /**
   * @description: response
   * @type: PddPmcUserCancelPmcUserCancelResponseResponseInterface
   * @default:
   *
   **/
  pmc_user_cancel_response: PddPmcUserCancelPmcUserCancelResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddPmcUserCancelPmcUserCancelResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_PMC_USER_CANCEL]: {
    requestInterface: PddPmcUserCancelRequestInterface;
    responseInterface: PddPmcUserCancelResponseInterface;
  };
}