import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$PaymentMethodDomainUpdateBody,
  PaymentMethodDomainUpdateBody,
  Schemas$PaymentMethodDomainUpdateBody,
} from "@sideko-inc/stripe/types/payment-method-domain-update-body";
import {
  External$PaymentMethodDomainValidateBody,
  PaymentMethodDomainValidateBody,
  Schemas$PaymentMethodDomainValidateBody,
} from "@sideko-inc/stripe/types/payment-method-domain-validate-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * The domain name that this payment method domain object represents.
   */
  domainName?: string | undefined;
  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods will not appear in Elements or Embedded Checkout
   */
  enabled?: boolean | undefined;
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
  domain_name?: string | undefined;
  enabled?: boolean | undefined;
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
    domain_name: z.string().optional(),
    enabled: z.boolean().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      domain_name: "domainName",
      enabled: "enabled",
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
    domainName: z.string().optional(),
    enabled: z.boolean().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      domainName: "domain_name",
      enabled: "enabled",
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
  paymentMethodDomain: string;
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
  payment_method_domain: string;
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
    payment_method_domain: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payment_method_domain: "paymentMethodDomain",
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
    paymentMethodDomain: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentMethodDomain: "payment_method_domain",
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
   * The domain name that this payment method domain object represents.
   */
  domainName: string;
  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.
   */
  enabled?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  domain_name: string;
  enabled?: boolean | undefined;
  expand?: string[] | undefined;
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
    domain_name: z.string(),
    enabled: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      domain_name: "domainName",
      enabled: "enabled",
      expand: "expand",
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
    domainName: z.string(),
    enabled: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      domainName: "domain_name",
      enabled: "enabled",
      expand: "expand",
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
  data?: PaymentMethodDomainUpdateBody | undefined;
  paymentMethodDomain: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$PaymentMethodDomainUpdateBody | undefined;
  payment_method_domain: string;
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
    data: Schemas$PaymentMethodDomainUpdateBody.in.optional(),
    payment_method_domain: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      payment_method_domain: "paymentMethodDomain",
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
    data: Schemas$PaymentMethodDomainUpdateBody.out.optional(),
    paymentMethodDomain: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      paymentMethodDomain: "payment_method_domain",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * ValidateRequest
 */
export type ValidateRequest = {
  data?: PaymentMethodDomainValidateBody | undefined;
  paymentMethodDomain: string;
};

/**
 * @internal
 * ValidateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ValidateRequest = {
  data?: External$PaymentMethodDomainValidateBody | undefined;
  payment_method_domain: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ValidateRequest
 */
const SchemaIn$ValidateRequest: z.ZodType<
  ValidateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PaymentMethodDomainValidateBody.in.optional(),
    payment_method_domain: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      payment_method_domain: "paymentMethodDomain",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ValidateRequest
 */
const SchemaOut$ValidateRequest: z.ZodType<
  External$ValidateRequest, // output type of this zod object
  z.ZodTypeDef,
  ValidateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$PaymentMethodDomainValidateBody.out.optional(),
    paymentMethodDomain: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      paymentMethodDomain: "payment_method_domain",
    });
  });

export const Schemas$ValidateRequest = {
  in: SchemaIn$ValidateRequest,
  out: SchemaOut$ValidateRequest,
};
