import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperIssuingCardShippingDeliverBody,
  Schemas$TestHelperIssuingCardShippingDeliverBody,
  TestHelperIssuingCardShippingDeliverBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-deliver-body";
import {
  External$TestHelperIssuingCardShippingFailBody,
  Schemas$TestHelperIssuingCardShippingFailBody,
  TestHelperIssuingCardShippingFailBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-fail-body";
import {
  External$TestHelperIssuingCardShippingReturnedBody,
  Schemas$TestHelperIssuingCardShippingReturnedBody,
  TestHelperIssuingCardShippingReturnedBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-returned-body";
import {
  External$TestHelperIssuingCardShippingShipBody,
  Schemas$TestHelperIssuingCardShippingShipBody,
  TestHelperIssuingCardShippingShipBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-ship-body";
import {
  External$TestHelperIssuingCardShippingSubmitBody,
  Schemas$TestHelperIssuingCardShippingSubmitBody,
  TestHelperIssuingCardShippingSubmitBody,
} from "@sideko-inc/stripe/types/test-helper-issuing-card-shipping-submit-body";
import * as z from "zod";

/**
 * DeliverRequest
 */
export type DeliverRequest = {
  data?: TestHelperIssuingCardShippingDeliverBody | undefined;
  card: string;
};

/**
 * @internal
 * DeliverRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeliverRequest = {
  data?: External$TestHelperIssuingCardShippingDeliverBody | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeliverRequest
 */
const SchemaIn$DeliverRequest: z.ZodType<
  DeliverRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingDeliverBody.in.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeliverRequest
 */
const SchemaOut$DeliverRequest: z.ZodType<
  External$DeliverRequest, // output type of this zod object
  z.ZodTypeDef,
  DeliverRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingDeliverBody.out.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

export const Schemas$DeliverRequest = {
  in: SchemaIn$DeliverRequest,
  out: SchemaOut$DeliverRequest,
};

/**
 * FailRequest
 */
export type FailRequest = {
  data?: TestHelperIssuingCardShippingFailBody | undefined;
  card: string;
};

/**
 * @internal
 * FailRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FailRequest = {
  data?: External$TestHelperIssuingCardShippingFailBody | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FailRequest
 */
const SchemaIn$FailRequest: z.ZodType<
  FailRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingFailBody.in.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FailRequest
 */
const SchemaOut$FailRequest: z.ZodType<
  External$FailRequest, // output type of this zod object
  z.ZodTypeDef,
  FailRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingFailBody.out.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

export const Schemas$FailRequest = {
  in: SchemaIn$FailRequest,
  out: SchemaOut$FailRequest,
};

/**
 * ReturnedRequest
 */
export type ReturnedRequest = {
  data?: TestHelperIssuingCardShippingReturnedBody | undefined;
  card: string;
};

/**
 * @internal
 * ReturnedRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReturnedRequest = {
  data?: External$TestHelperIssuingCardShippingReturnedBody | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReturnedRequest
 */
const SchemaIn$ReturnedRequest: z.ZodType<
  ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingReturnedBody.in.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReturnedRequest
 */
const SchemaOut$ReturnedRequest: z.ZodType<
  External$ReturnedRequest, // output type of this zod object
  z.ZodTypeDef,
  ReturnedRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingReturnedBody.out.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

export const Schemas$ReturnedRequest = {
  in: SchemaIn$ReturnedRequest,
  out: SchemaOut$ReturnedRequest,
};

/**
 * ShipRequest
 */
export type ShipRequest = {
  data?: TestHelperIssuingCardShippingShipBody | undefined;
  card: string;
};

/**
 * @internal
 * ShipRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShipRequest = {
  data?: External$TestHelperIssuingCardShippingShipBody | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShipRequest
 */
const SchemaIn$ShipRequest: z.ZodType<
  ShipRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingShipBody.in.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShipRequest
 */
const SchemaOut$ShipRequest: z.ZodType<
  External$ShipRequest, // output type of this zod object
  z.ZodTypeDef,
  ShipRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingShipBody.out.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

export const Schemas$ShipRequest = {
  in: SchemaIn$ShipRequest,
  out: SchemaOut$ShipRequest,
};

/**
 * SubmitRequest
 */
export type SubmitRequest = {
  data?: TestHelperIssuingCardShippingSubmitBody | undefined;
  card: string;
};

/**
 * @internal
 * SubmitRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubmitRequest = {
  data?: External$TestHelperIssuingCardShippingSubmitBody | undefined;
  card: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubmitRequest
 */
const SchemaIn$SubmitRequest: z.ZodType<
  SubmitRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingSubmitBody.in.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubmitRequest
 */
const SchemaOut$SubmitRequest: z.ZodType<
  External$SubmitRequest, // output type of this zod object
  z.ZodTypeDef,
  SubmitRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperIssuingCardShippingSubmitBody.out.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

export const Schemas$SubmitRequest = {
  in: SchemaIn$SubmitRequest,
  out: SchemaOut$SubmitRequest,
};
