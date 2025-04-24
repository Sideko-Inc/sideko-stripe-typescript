import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicesResourceInvoiceTaxId = {
  /**
   * The type of the tax ID, one of `ad_nrt`, `ar_cuit`, `eu_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eu_oss_vat`, `hr_oib`, `pe_ruc`, `ro_tin`, `rs_pib`, `sv_nit`, `uy_ruc`, `ve_rif`, `vn_tin`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `no_voec`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `li_uid`, `li_vat`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, `ke_pin`, `tr_tin`, `eg_tin`, `ph_tin`, `al_tin`, `bh_vat`, `kz_bin`, `ng_tin`, `om_vat`, `de_stn`, `ch_uid`, `tz_vat`, `uz_vat`, `uz_tin`, `md_vat`, `ma_vat`, `by_tin`, `ao_tin`, `bs_tin`, `bb_tin`, `cd_nif`, `mr_nif`, `me_pib`, `zw_tin`, `ba_tin`, `gn_nif`, `mk_vat`, `sr_fin`, `sn_ninea`, `am_tin`, `np_pan`, `tj_tin`, `ug_tin`, `zm_tin`, `kh_tin`, or `unknown`
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
    | "unknown"
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
   * The value of the tax ID.
   */
  value?: string | null | undefined;
};

/**
 * @internal
 * InvoicesResourceInvoiceTaxId without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicesResourceInvoiceTaxId = {
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
    | "unknown"
    | "us_ein"
    | "uy_ruc"
    | "uz_tin"
    | "uz_vat"
    | "ve_rif"
    | "vn_tin"
    | "za_vat"
    | "zm_tin"
    | "zw_tin";
  value?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicesResourceInvoiceTaxId
 */
const SchemaIn$InvoicesResourceInvoiceTaxId: z.ZodType<
  InvoicesResourceInvoiceTaxId, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
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
      "unknown",
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
    value: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicesResourceInvoiceTaxId
 */
const SchemaOut$InvoicesResourceInvoiceTaxId: z.ZodType<
  External$InvoicesResourceInvoiceTaxId, // output type of this zod object
  z.ZodTypeDef,
  InvoicesResourceInvoiceTaxId // the object to be transformed
> = z
  .object({
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
      "unknown",
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
    value: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
      value: "value",
    });
  });

export const Schemas$InvoicesResourceInvoiceTaxId = {
  in: SchemaIn$InvoicesResourceInvoiceTaxId,
  out: SchemaOut$InvoicesResourceInvoiceTaxId,
};
