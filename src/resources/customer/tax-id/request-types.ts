import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  customer: string;
  id: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  customer: string;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    customer: z.string(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      id: "id",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  customer: string;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  customer: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    customer: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  customer: string;
  id: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  customer: string;
  id: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string(),
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      id: "id",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    customer: z.string(),
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      id: "id",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `ba_tin`, `bb_tin`, `bg_uic`, `bh_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cn_tin`, `co_nit`, `cr_tin`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kh_tin`, `kr_brn`, `kz_bin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
   */
  type:
    | "ad_nrt"
    | "ae_trn"
    | "al_tin"
    | "am_tin"
    | "ao_tin"
    | "ar_cuit"
    | "au_abn"
    | "au_arn"
    | "ba_tin"
    | "bb_tin"
    | "bg_uic"
    | "bh_vat"
    | "bo_tin"
    | "br_cnpj"
    | "br_cpf"
    | "bs_tin"
    | "by_tin"
    | "ca_bn"
    | "ca_gst_hst"
    | "ca_pst_bc"
    | "ca_pst_mb"
    | "ca_pst_sk"
    | "ca_qst"
    | "cd_nif"
    | "ch_uid"
    | "ch_vat"
    | "cl_tin"
    | "cn_tin"
    | "co_nit"
    | "cr_tin"
    | "de_stn"
    | "do_rcn"
    | "ec_ruc"
    | "eg_tin"
    | "es_cif"
    | "eu_oss_vat"
    | "eu_vat"
    | "gb_vat"
    | "ge_vat"
    | "gn_nif"
    | "hk_br"
    | "hr_oib"
    | "hu_tin"
    | "id_npwp"
    | "il_vat"
    | "in_gst"
    | "is_vat"
    | "jp_cn"
    | "jp_rn"
    | "jp_trn"
    | "ke_pin"
    | "kh_tin"
    | "kr_brn"
    | "kz_bin"
    | "li_uid"
    | "li_vat"
    | "ma_vat"
    | "md_vat"
    | "me_pib"
    | "mk_vat"
    | "mr_nif"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "ng_tin"
    | "no_vat"
    | "no_voec"
    | "np_pan"
    | "nz_gst"
    | "om_vat"
    | "pe_ruc"
    | "ph_tin"
    | "ro_tin"
    | "rs_pib"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "si_tin"
    | "sn_ninea"
    | "sr_fin"
    | "sv_nit"
    | "th_vat"
    | "tj_tin"
    | "tr_tin"
    | "tw_vat"
    | "tz_vat"
    | "ua_vat"
    | "ug_tin"
    | "us_ein"
    | "uy_ruc"
    | "uz_tin"
    | "uz_vat"
    | "ve_rif"
    | "vn_tin"
    | "za_vat"
    | "zm_tin"
    | "zw_tin";
  /**
   * Value of the tax ID.
   */
  value: string;
  customer: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  expand?: string[] | undefined;
  type:
    | "ad_nrt"
    | "ae_trn"
    | "al_tin"
    | "am_tin"
    | "ao_tin"
    | "ar_cuit"
    | "au_abn"
    | "au_arn"
    | "ba_tin"
    | "bb_tin"
    | "bg_uic"
    | "bh_vat"
    | "bo_tin"
    | "br_cnpj"
    | "br_cpf"
    | "bs_tin"
    | "by_tin"
    | "ca_bn"
    | "ca_gst_hst"
    | "ca_pst_bc"
    | "ca_pst_mb"
    | "ca_pst_sk"
    | "ca_qst"
    | "cd_nif"
    | "ch_uid"
    | "ch_vat"
    | "cl_tin"
    | "cn_tin"
    | "co_nit"
    | "cr_tin"
    | "de_stn"
    | "do_rcn"
    | "ec_ruc"
    | "eg_tin"
    | "es_cif"
    | "eu_oss_vat"
    | "eu_vat"
    | "gb_vat"
    | "ge_vat"
    | "gn_nif"
    | "hk_br"
    | "hr_oib"
    | "hu_tin"
    | "id_npwp"
    | "il_vat"
    | "in_gst"
    | "is_vat"
    | "jp_cn"
    | "jp_rn"
    | "jp_trn"
    | "ke_pin"
    | "kh_tin"
    | "kr_brn"
    | "kz_bin"
    | "li_uid"
    | "li_vat"
    | "ma_vat"
    | "md_vat"
    | "me_pib"
    | "mk_vat"
    | "mr_nif"
    | "mx_rfc"
    | "my_frp"
    | "my_itn"
    | "my_sst"
    | "ng_tin"
    | "no_vat"
    | "no_voec"
    | "np_pan"
    | "nz_gst"
    | "om_vat"
    | "pe_ruc"
    | "ph_tin"
    | "ro_tin"
    | "rs_pib"
    | "ru_inn"
    | "ru_kpp"
    | "sa_vat"
    | "sg_gst"
    | "sg_uen"
    | "si_tin"
    | "sn_ninea"
    | "sr_fin"
    | "sv_nit"
    | "th_vat"
    | "tj_tin"
    | "tr_tin"
    | "tw_vat"
    | "tz_vat"
    | "ua_vat"
    | "ug_tin"
    | "us_ein"
    | "uy_ruc"
    | "uz_tin"
    | "uz_vat"
    | "ve_rif"
    | "vn_tin"
    | "za_vat"
    | "zm_tin"
    | "zw_tin";
  value: string;
  customer: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    type: z.enum([
      "ad_nrt",
      "ae_trn",
      "al_tin",
      "am_tin",
      "ao_tin",
      "ar_cuit",
      "au_abn",
      "au_arn",
      "ba_tin",
      "bb_tin",
      "bg_uic",
      "bh_vat",
      "bo_tin",
      "br_cnpj",
      "br_cpf",
      "bs_tin",
      "by_tin",
      "ca_bn",
      "ca_gst_hst",
      "ca_pst_bc",
      "ca_pst_mb",
      "ca_pst_sk",
      "ca_qst",
      "cd_nif",
      "ch_uid",
      "ch_vat",
      "cl_tin",
      "cn_tin",
      "co_nit",
      "cr_tin",
      "de_stn",
      "do_rcn",
      "ec_ruc",
      "eg_tin",
      "es_cif",
      "eu_oss_vat",
      "eu_vat",
      "gb_vat",
      "ge_vat",
      "gn_nif",
      "hk_br",
      "hr_oib",
      "hu_tin",
      "id_npwp",
      "il_vat",
      "in_gst",
      "is_vat",
      "jp_cn",
      "jp_rn",
      "jp_trn",
      "ke_pin",
      "kh_tin",
      "kr_brn",
      "kz_bin",
      "li_uid",
      "li_vat",
      "ma_vat",
      "md_vat",
      "me_pib",
      "mk_vat",
      "mr_nif",
      "mx_rfc",
      "my_frp",
      "my_itn",
      "my_sst",
      "ng_tin",
      "no_vat",
      "no_voec",
      "np_pan",
      "nz_gst",
      "om_vat",
      "pe_ruc",
      "ph_tin",
      "ro_tin",
      "rs_pib",
      "ru_inn",
      "ru_kpp",
      "sa_vat",
      "sg_gst",
      "sg_uen",
      "si_tin",
      "sn_ninea",
      "sr_fin",
      "sv_nit",
      "th_vat",
      "tj_tin",
      "tr_tin",
      "tw_vat",
      "tz_vat",
      "ua_vat",
      "ug_tin",
      "us_ein",
      "uy_ruc",
      "uz_tin",
      "uz_vat",
      "ve_rif",
      "vn_tin",
      "za_vat",
      "zm_tin",
      "zw_tin",
    ]),
    value: z.string(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      type: "type",
      value: "value",
      customer: "customer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    type: z.enum([
      "ad_nrt",
      "ae_trn",
      "al_tin",
      "am_tin",
      "ao_tin",
      "ar_cuit",
      "au_abn",
      "au_arn",
      "ba_tin",
      "bb_tin",
      "bg_uic",
      "bh_vat",
      "bo_tin",
      "br_cnpj",
      "br_cpf",
      "bs_tin",
      "by_tin",
      "ca_bn",
      "ca_gst_hst",
      "ca_pst_bc",
      "ca_pst_mb",
      "ca_pst_sk",
      "ca_qst",
      "cd_nif",
      "ch_uid",
      "ch_vat",
      "cl_tin",
      "cn_tin",
      "co_nit",
      "cr_tin",
      "de_stn",
      "do_rcn",
      "ec_ruc",
      "eg_tin",
      "es_cif",
      "eu_oss_vat",
      "eu_vat",
      "gb_vat",
      "ge_vat",
      "gn_nif",
      "hk_br",
      "hr_oib",
      "hu_tin",
      "id_npwp",
      "il_vat",
      "in_gst",
      "is_vat",
      "jp_cn",
      "jp_rn",
      "jp_trn",
      "ke_pin",
      "kh_tin",
      "kr_brn",
      "kz_bin",
      "li_uid",
      "li_vat",
      "ma_vat",
      "md_vat",
      "me_pib",
      "mk_vat",
      "mr_nif",
      "mx_rfc",
      "my_frp",
      "my_itn",
      "my_sst",
      "ng_tin",
      "no_vat",
      "no_voec",
      "np_pan",
      "nz_gst",
      "om_vat",
      "pe_ruc",
      "ph_tin",
      "ro_tin",
      "rs_pib",
      "ru_inn",
      "ru_kpp",
      "sa_vat",
      "sg_gst",
      "sg_uen",
      "si_tin",
      "sn_ninea",
      "sr_fin",
      "sv_nit",
      "th_vat",
      "tj_tin",
      "tr_tin",
      "tw_vat",
      "tz_vat",
      "ua_vat",
      "ug_tin",
      "us_ein",
      "uy_ruc",
      "uz_tin",
      "uz_vat",
      "ve_rif",
      "vn_tin",
      "za_vat",
      "zm_tin",
      "zw_tin",
    ]),
    value: z.string(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      type: "type",
      value: "value",
      customer: "customer",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
