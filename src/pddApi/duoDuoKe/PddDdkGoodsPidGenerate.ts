export const PDD_DDK_GOODS_PID_GENERATE = 'PDD_DDK_GOODS_PID_GENERATE';

/**
 * 接口名称：创建多多进宝推广位
 * 接口标识：pdd.ddk.goods.pid.generate
 * 接口使用场景：创建多多进宝推广位
 **/

export interface PddDdkGoodsPidGenerateRequestInterface {
  /**
   * @description: 要生成的推广位数量，默认为10，范围为：1~100
   * @type: string
   * @default:
   **/
  number?: string;

  /**
   * @description: 推广位名称，例如["1","2"]
   * @type: string
   * @default:
   **/
  p_id_name_list: string;
}

/**
 * 接口名称：创建多多进宝推广位
 * 接口标识：pdd.ddk.goods.pid.generate
 * 接口使用场景：创建多多进宝推广位
 **/

export interface PddDdkGoodsPidGenerateResponseInterface {
  /**
   * @description: response
   * @type: PddDdkGoodsPidGeneratePIdGenerateResponseResponseInterface
   * @default:
   *
   **/
  p_id_generate_response: PddDdkGoodsPidGeneratePIdGenerateResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddDdkGoodsPidGeneratePIdGenerateResponseResponseInterface {
  /**
   * @description: 多多进宝推广位对象列表
   * @type: PddDdkGoodsPidGeneratePIdGenerateResponsePIdListResponseInterface[]
   * @default:
   *
   **/
  p_id_list: PddDdkGoodsPidGeneratePIdGenerateResponsePIdListResponseInterface[];

  /**
   * @description: PID剩余数量
   * @type: number
   * @default:
   **/
  remain_pid_count: number;
}

/**
 * @description 多多进宝推广位对象列表
 * @default
 * @example
 **/

export interface PddDdkGoodsPidGeneratePIdGenerateResponsePIdListResponseInterface {
  /**
   * @description: 推广位创建时间
   * @type: string
   * @default:
   **/
  create_time: string;

  /**
   * @description: 推广位名称
   * @type: string
   * @default:
   **/
  pid_name: string;

  /**
   * @description: 调用方推广位ID
   * @type: string
   * @default:
   **/
  p_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DDK_GOODS_PID_GENERATE]: {
    requestInterface: PddDdkGoodsPidGenerateRequestInterface;
    responseInterface: PddDdkGoodsPidGenerateResponseInterface;
  };
}