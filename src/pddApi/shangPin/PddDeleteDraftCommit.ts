export const PDD_DELETE_DRAFT_COMMIT = 'PDD_DELETE_DRAFT_COMMIT';

/**
 * 接口名称：删除草稿接口
 * 接口标识：pdd.delete.draft.commit
 * 接口使用场景：删除草稿接口
 **/
export interface PddDeleteDraftCommitRequestInterface {
  /**
   * @description: 草稿id
   * @type: string
   * @default:
   **/
  goods_commit_id?: string;
}

/**
 * 接口名称：删除草稿接口
 * 接口标识：pdd.delete.draft.commit
 * 接口使用场景：删除草稿接口
 **/
export interface PddDeleteDraftCommitResponseInterface {
  /**
   * @description: 操作状态，true
   * @type: boolean
   * @default:
   **/
  open_api_response: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_DELETE_DRAFT_COMMIT]: {
    requestInterface: PddDeleteDraftCommitRequestInterface;
    responseInterface: PddDeleteDraftCommitResponseInterface;
  };
}
