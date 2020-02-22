export const PDD_REFUND_STATUS_CHECK = 'PDD_REFUND_STATUS_CHECK';

/**
 * 接口名称：售后校验接口
 * 接口标识：pdd.refund.status.check
 * 接口使用场景：校验售后单
 **/

export interface PddRefundStatusCheckRequestInterface {
  /**
   * @description: 20150909-452750051,20150909-452750134 用逗号分开
   * @type: string
   * @default:
   **/
  order_sns?: string;
}

/**
 * 接口名称：售后校验接口
 * 接口标识：pdd.refund.status.check
 * 接口使用场景：校验售后单
 **/

export interface PddRefundStatusCheckResponseInterface {
  /**
   * @description: response
   * @type: PddRefundStatusCheckRefundStatusCheckResponseResponseInterface
   * @default:
   *
   **/
  refund_status_check_response: PddRefundStatusCheckRefundStatusCheckResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddRefundStatusCheckRefundStatusCheckResponseResponseInterface {
  /**
   * @description: 存在售后的订单
   * @type: PddRefundStatusCheckRefundStatusCheckResponseOrderSnsExistsRefundResponseInterface[]
   * @default:
   *
   **/
  order_sns_exists_refund: PddRefundStatusCheckRefundStatusCheckResponseOrderSnsExistsRefundResponseInterface[];
}

/**
 * @description 存在售后的订单
 * @default
 * @example
 **/

export interface PddRefundStatusCheckRefundStatusCheckResponseOrderSnsExistsRefundResponseInterface {
  /**
   * @description: 订单编号
   * @type: string
   * @default:
   **/
  order_sn: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_REFUND_STATUS_CHECK]: {
    requestInterface: PddRefundStatusCheckRequestInterface;
    responseInterface: PddRefundStatusCheckResponseInterface;
  };
}