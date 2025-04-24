import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$PaymentMethodCreateBody,
  PaymentMethodCreateBody,
  Schemas$PaymentMethodCreateBody,
} from "@sideko-inc/stripe/types/payment-method-create-body";
import {
  External$PaymentMethodDetachBody,
  PaymentMethodDetachBody,
  Schemas$PaymentMethodDetachBody,
} from "@sideko-inc/stripe/types/payment-method-detach-body";
import {
  External$PaymentMethodUpdateBody,
  PaymentMethodUpdateBody,
  Schemas$PaymentMethodUpdateBody,
} from "@sideko-inc/stripe/types/payment-method-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * The ID of the customer whose PaymentMethods will be retrieved.
   */
  customer?: string | undefined;
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
  /**
   * An optional filter on the list, based on the object `type` field. Without the filter, the list includes all current and future payment method types. If your integration expects only one type of payment method in the response, make sure to provide a type value in the request.
   */
  type?:
    | (
        | "acss_debit"
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "alma"
        | "amazon_pay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "billie"
        | "blik"
        | "boleto"
        | "card"
        | "cashapp"
        | "customer_balance"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "kakao_pay"
        | "klarna"
        | "konbini"
        | "kr_card"
        | "link"
        | "mobilepay"
        | "multibanco"
        | "naver_pay"
        | "nz_bank_account"
        | "oxxo"
        | "p24"
        | "pay_by_bank"
        | "payco"
        | "paynow"
        | "paypal"
        | "pix"
        | "promptpay"
        | "revolut_pay"
        | "samsung_pay"
        | "satispay"
        | "sepa_debit"
        | "sofort"
        | "swish"
        | "twint"
        | "us_bank_account"
        | "wechat_pay"
        | "zip"
      )
    | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  type?:
    | (
        | "acss_debit"
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "alma"
        | "amazon_pay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "billie"
        | "blik"
        | "boleto"
        | "card"
        | "cashapp"
        | "customer_balance"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "kakao_pay"
        | "klarna"
        | "konbini"
        | "kr_card"
        | "link"
        | "mobilepay"
        | "multibanco"
        | "naver_pay"
        | "nz_bank_account"
        | "oxxo"
        | "p24"
        | "pay_by_bank"
        | "payco"
        | "paynow"
        | "paypal"
        | "pix"
        | "promptpay"
        | "revolut_pay"
        | "samsung_pay"
        | "satispay"
        | "sepa_debit"
        | "sofort"
        | "swish"
        | "twint"
        | "us_bank_account"
        | "wechat_pay"
        | "zip"
      )
    | undefined;
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
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    type: z
      .enum([
        "acss_debit",
        "affirm",
        "afterpay_clearpay",
        "alipay",
        "alma",
        "amazon_pay",
        "au_becs_debit",
        "bacs_debit",
        "bancontact",
        "billie",
        "blik",
        "boleto",
        "card",
        "cashapp",
        "customer_balance",
        "eps",
        "fpx",
        "giropay",
        "grabpay",
        "ideal",
        "kakao_pay",
        "klarna",
        "konbini",
        "kr_card",
        "link",
        "mobilepay",
        "multibanco",
        "naver_pay",
        "nz_bank_account",
        "oxxo",
        "p24",
        "pay_by_bank",
        "payco",
        "paynow",
        "paypal",
        "pix",
        "promptpay",
        "revolut_pay",
        "samsung_pay",
        "satispay",
        "sepa_debit",
        "sofort",
        "swish",
        "twint",
        "us_bank_account",
        "wechat_pay",
        "zip",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      type: "type",
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
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    type: z
      .enum([
        "acss_debit",
        "affirm",
        "afterpay_clearpay",
        "alipay",
        "alma",
        "amazon_pay",
        "au_becs_debit",
        "bacs_debit",
        "bancontact",
        "billie",
        "blik",
        "boleto",
        "card",
        "cashapp",
        "customer_balance",
        "eps",
        "fpx",
        "giropay",
        "grabpay",
        "ideal",
        "kakao_pay",
        "klarna",
        "konbini",
        "kr_card",
        "link",
        "mobilepay",
        "multibanco",
        "naver_pay",
        "nz_bank_account",
        "oxxo",
        "p24",
        "pay_by_bank",
        "payco",
        "paynow",
        "paypal",
        "pix",
        "promptpay",
        "revolut_pay",
        "samsung_pay",
        "satispay",
        "sepa_debit",
        "sofort",
        "swish",
        "twint",
        "us_bank_account",
        "wechat_pay",
        "zip",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      type: "type",
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
  paymentMethod: string;
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
  payment_method: string;
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
    payment_method: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payment_method: "paymentMethod",
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
    paymentMethod: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentMethod: "payment_method",
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
  data?: PaymentMethodCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$PaymentMethodCreateBody | undefined;
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
    data: Schemas$PaymentMethodCreateBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
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
    data: Schemas$PaymentMethodCreateBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: PaymentMethodUpdateBody | undefined;
  paymentMethod: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$PaymentMethodUpdateBody | undefined;
  payment_method: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PaymentMethodUpdateBody.in.optional(),
    payment_method: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      payment_method: "paymentMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$PaymentMethodUpdateBody.out.optional(),
    paymentMethod: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      paymentMethod: "payment_method",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * AttachRequest
 */
export type AttachRequest = {
  /**
   * The ID of the customer to which to attach the PaymentMethod.
   */
  customer: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  paymentMethod: string;
};

/**
 * @internal
 * AttachRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AttachRequest = {
  customer: string;
  expand?: string[] | undefined;
  payment_method: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AttachRequest
 */
const SchemaIn$AttachRequest: z.ZodType<
  AttachRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string(),
    expand: z.array(z.string()).optional(),
    payment_method: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      expand: "expand",
      payment_method: "paymentMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AttachRequest
 */
const SchemaOut$AttachRequest: z.ZodType<
  External$AttachRequest, // output type of this zod object
  z.ZodTypeDef,
  AttachRequest // the object to be transformed
> = z
  .object({
    customer: z.string(),
    expand: z.array(z.string()).optional(),
    paymentMethod: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      expand: "expand",
      paymentMethod: "payment_method",
    });
  });

export const Schemas$AttachRequest = {
  in: SchemaIn$AttachRequest,
  out: SchemaOut$AttachRequest,
};

/**
 * DetachRequest
 */
export type DetachRequest = {
  data?: PaymentMethodDetachBody | undefined;
  paymentMethod: string;
};

/**
 * @internal
 * DetachRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DetachRequest = {
  data?: External$PaymentMethodDetachBody | undefined;
  payment_method: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DetachRequest
 */
const SchemaIn$DetachRequest: z.ZodType<
  DetachRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PaymentMethodDetachBody.in.optional(),
    payment_method: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      payment_method: "paymentMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DetachRequest
 */
const SchemaOut$DetachRequest: z.ZodType<
  External$DetachRequest, // output type of this zod object
  z.ZodTypeDef,
  DetachRequest // the object to be transformed
> = z
  .object({
    data: Schemas$PaymentMethodDetachBody.out.optional(),
    paymentMethod: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      paymentMethod: "payment_method",
    });
  });

export const Schemas$DetachRequest = {
  in: SchemaIn$DetachRequest,
  out: SchemaOut$DetachRequest,
};
