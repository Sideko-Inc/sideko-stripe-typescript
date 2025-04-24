import {
  External$IssuingDisputeCanceledEvidence,
  IssuingDisputeCanceledEvidence,
  Schemas$IssuingDisputeCanceledEvidence,
} from "./issuing-dispute-canceled-evidence";
import {
  External$IssuingDisputeDuplicateEvidence,
  IssuingDisputeDuplicateEvidence,
  Schemas$IssuingDisputeDuplicateEvidence,
} from "./issuing-dispute-duplicate-evidence";
import {
  External$IssuingDisputeFraudulentEvidence,
  IssuingDisputeFraudulentEvidence,
  Schemas$IssuingDisputeFraudulentEvidence,
} from "./issuing-dispute-fraudulent-evidence";
import {
  External$IssuingDisputeMerchandiseNotAsDescribedEvidence,
  IssuingDisputeMerchandiseNotAsDescribedEvidence,
  Schemas$IssuingDisputeMerchandiseNotAsDescribedEvidence,
} from "./issuing-dispute-merchandise-not-as-described-evidence";
import {
  External$IssuingDisputeNoValidAuthorizationEvidence,
  IssuingDisputeNoValidAuthorizationEvidence,
  Schemas$IssuingDisputeNoValidAuthorizationEvidence,
} from "./issuing-dispute-no-valid-authorization-evidence";
import {
  External$IssuingDisputeNotReceivedEvidence,
  IssuingDisputeNotReceivedEvidence,
  Schemas$IssuingDisputeNotReceivedEvidence,
} from "./issuing-dispute-not-received-evidence";
import {
  External$IssuingDisputeOtherEvidence,
  IssuingDisputeOtherEvidence,
  Schemas$IssuingDisputeOtherEvidence,
} from "./issuing-dispute-other-evidence";
import {
  External$IssuingDisputeServiceNotAsDescribedEvidence,
  IssuingDisputeServiceNotAsDescribedEvidence,
  Schemas$IssuingDisputeServiceNotAsDescribedEvidence,
} from "./issuing-dispute-service-not-as-described-evidence";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingDisputeEvidence = {
  canceled?: IssuingDisputeCanceledEvidence | undefined;
  duplicate?: IssuingDisputeDuplicateEvidence | undefined;
  fraudulent?: IssuingDisputeFraudulentEvidence | undefined;
  merchandiseNotAsDescribed?:
    | IssuingDisputeMerchandiseNotAsDescribedEvidence
    | undefined;
  noValidAuthorization?: IssuingDisputeNoValidAuthorizationEvidence | undefined;
  notReceived?: IssuingDisputeNotReceivedEvidence | undefined;
  other?: IssuingDisputeOtherEvidence | undefined;
  /**
   * The reason for filing the dispute. Its value will match the field containing the evidence.
   */
  reason:
    | "canceled"
    | "duplicate"
    | "fraudulent"
    | "merchandise_not_as_described"
    | "no_valid_authorization"
    | "not_received"
    | "other"
    | "service_not_as_described";
  serviceNotAsDescribed?:
    | IssuingDisputeServiceNotAsDescribedEvidence
    | undefined;
};

/**
 * @internal
 * IssuingDisputeEvidence without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeEvidence = {
  canceled?: External$IssuingDisputeCanceledEvidence | undefined;
  duplicate?: External$IssuingDisputeDuplicateEvidence | undefined;
  fraudulent?: External$IssuingDisputeFraudulentEvidence | undefined;
  merchandise_not_as_described?:
    | External$IssuingDisputeMerchandiseNotAsDescribedEvidence
    | undefined;
  no_valid_authorization?:
    | External$IssuingDisputeNoValidAuthorizationEvidence
    | undefined;
  not_received?: External$IssuingDisputeNotReceivedEvidence | undefined;
  other?: External$IssuingDisputeOtherEvidence | undefined;
  reason:
    | "canceled"
    | "duplicate"
    | "fraudulent"
    | "merchandise_not_as_described"
    | "no_valid_authorization"
    | "not_received"
    | "other"
    | "service_not_as_described";
  service_not_as_described?:
    | External$IssuingDisputeServiceNotAsDescribedEvidence
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeEvidence
 */
const SchemaIn$IssuingDisputeEvidence: z.ZodType<
  IssuingDisputeEvidence, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    canceled: z.lazy(() =>
      Schemas$IssuingDisputeCanceledEvidence.in.optional(),
    ),
    duplicate: z.lazy(() =>
      Schemas$IssuingDisputeDuplicateEvidence.in.optional(),
    ),
    fraudulent: z.lazy(() =>
      Schemas$IssuingDisputeFraudulentEvidence.in.optional(),
    ),
    merchandise_not_as_described: z.lazy(() =>
      Schemas$IssuingDisputeMerchandiseNotAsDescribedEvidence.in.optional(),
    ),
    no_valid_authorization: z.lazy(() =>
      Schemas$IssuingDisputeNoValidAuthorizationEvidence.in.optional(),
    ),
    not_received: z.lazy(() =>
      Schemas$IssuingDisputeNotReceivedEvidence.in.optional(),
    ),
    other: z.lazy(() => Schemas$IssuingDisputeOtherEvidence.in.optional()),
    reason: z.enum([
      "canceled",
      "duplicate",
      "fraudulent",
      "merchandise_not_as_described",
      "no_valid_authorization",
      "not_received",
      "other",
      "service_not_as_described",
    ]),
    service_not_as_described: z.lazy(() =>
      Schemas$IssuingDisputeServiceNotAsDescribedEvidence.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled: "canceled",
      duplicate: "duplicate",
      fraudulent: "fraudulent",
      merchandise_not_as_described: "merchandiseNotAsDescribed",
      no_valid_authorization: "noValidAuthorization",
      not_received: "notReceived",
      other: "other",
      reason: "reason",
      service_not_as_described: "serviceNotAsDescribed",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeEvidence
 */
const SchemaOut$IssuingDisputeEvidence: z.ZodType<
  External$IssuingDisputeEvidence, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeEvidence // the object to be transformed
> = z
  .object({
    canceled: z.lazy(() =>
      Schemas$IssuingDisputeCanceledEvidence.out.optional(),
    ),
    duplicate: z.lazy(() =>
      Schemas$IssuingDisputeDuplicateEvidence.out.optional(),
    ),
    fraudulent: z.lazy(() =>
      Schemas$IssuingDisputeFraudulentEvidence.out.optional(),
    ),
    merchandiseNotAsDescribed: z.lazy(() =>
      Schemas$IssuingDisputeMerchandiseNotAsDescribedEvidence.out.optional(),
    ),
    noValidAuthorization: z.lazy(() =>
      Schemas$IssuingDisputeNoValidAuthorizationEvidence.out.optional(),
    ),
    notReceived: z.lazy(() =>
      Schemas$IssuingDisputeNotReceivedEvidence.out.optional(),
    ),
    other: z.lazy(() => Schemas$IssuingDisputeOtherEvidence.out.optional()),
    reason: z.enum([
      "canceled",
      "duplicate",
      "fraudulent",
      "merchandise_not_as_described",
      "no_valid_authorization",
      "not_received",
      "other",
      "service_not_as_described",
    ]),
    serviceNotAsDescribed: z.lazy(() =>
      Schemas$IssuingDisputeServiceNotAsDescribedEvidence.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled: "canceled",
      duplicate: "duplicate",
      fraudulent: "fraudulent",
      merchandiseNotAsDescribed: "merchandise_not_as_described",
      noValidAuthorization: "no_valid_authorization",
      notReceived: "not_received",
      other: "other",
      reason: "reason",
      serviceNotAsDescribed: "service_not_as_described",
    });
  });

export const Schemas$IssuingDisputeEvidence = {
  in: SchemaIn$IssuingDisputeEvidence,
  out: SchemaOut$IssuingDisputeEvidence,
};
